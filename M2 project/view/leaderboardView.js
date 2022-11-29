// leaderboardView();
function leaderboardView() {
  let app = document.getElementById("app");
  let html = "";
  let inputs = model.inputs.leaderboard;
  html += /*HTML*/ `
  <div class="logo-container" ">
    <img class='logo' src="assets/Logo.svg" alt="tennis icon"/>
  </div> 

    <div class="leaderboard-categories">
        <span 
        ${inputs.category === "tournaments" ? `class="selected"` : ""}
        onclick="ChangeCategory('tournaments')"
        >Turneringer</span>
        <span 
        ${inputs.category === "matches" ? `class="selected"` : ""}
        onclick="ChangeCategory('matches')"
        >Kamper</span>
    </div>
    <div class="date-sort-leaderboard">
      <span ${inputs.showLast == 7 ? `class="selected"` : ""} onclick="sortDate(7)">siste uke</span>
      <span ${inputs.showLast == 30 ? `class="selected"` : ""} onclick="sortDate(30)">siste måned</span>
      <span ${inputs.showLast == 365 ? `class="selected"` : ""} onclick="sortDate(365)">siste året</span>
      <span ${inputs.showLast == 0 ? `class="selected"` : ""} onclick="sortDate(0)">totalt</span>
    </div>

    <label style="margin-top: 5px;" for="choose">sorter etter:</label>
    <select onchange="sortBy(this)" name="choose">
      ${getOptions()};
    </select>

    ${getWins()}
    <button class="btn" onclick="menuView()">tilbake</button>
    `;
  app.innerHTML = html;
}

function getOptions() {
  let selectedOptionIndex = model.app.leaderboradSelectIndex;

  let html = ``;
  let options = ["Vunnet", "Prosent"];

  options.forEach((option, index) => {
    let isSelected = index === selectedOptionIndex ? "selected" : "";
    html += `<option value="${option}" ${isSelected}>${option}</option>`;
  });

  return html;
}

function getWins(winType) {
  let wins = getStats();

  html = `
    <table style="width:90%; margin-top: 10px;">
      <tr>
        <th>Plass</th>
        <th>Navn</th>
        <th>V/T</th>
        <th>%</th>
      </tr>
      ${wins.join("")}
    </table>
    `;
  return html;
}

function getStats() {
  resetLastMatches();
  timedMatches();
  let category = model.inputs.leaderboard.category;
  let sortBy = model.inputs.leaderboard.sortBy;
  let users = model.data.users;

  let result = "";

  let winners = users;

  // Get tournaments/matches
  winners = winners.sort((a, b) => (a.userName > b.userName ? 1 : -1));
  if (sortBy === "Vunnet") {
    winners = winners.sort((a, b) =>
      category == "tournaments"
        ? a.lastTourneyWins < b.lastTourneyWins || a.lastTourneyLosses + a.lastTourneyWins === 0
          ? 1
          : -1
        : a.lastWins < b.lastWins || a.lastLosses + a.lastWins === 0
        ? 1
        : -1
    );
  } else {
    winners = users.sort((a, b) =>
      category == "tournaments"
        ? a.lastTourneyWins / (a.lastTourneyWins + a.lastTourneyLosses) <
            b.lastTourneyWins / (b.lastTourneyWins + b.lastTourneyLosses) ||
          a.lastTourneyLosses + a.lastTourneyWins === 0
          ? 1
          : -1
        : a.lastWins / (a.lastWins + a.lastLosses) < b.lastWins / (b.lastWins + b.lastLosses) ||
          a.lastLosses + a.lastWins === 0
        ? 1
        : -1
    );
  }

  result = winners.map((user, index) =>
    category == "tournaments"
      ? `
      <tr>
        <th>${index + 1}</th>
        <th>${user.userName}</th>
        <th>${user.lastTourneyWins}/${user.lastTourneyLosses}</th>
        <th>${
          user.lastTourneyWins + user.lastTourneyLosses === 0
            ? "N/A"
            : Math.round((user.lastTourneyWins / (user.lastTourneyWins + user.lastTourneyLosses)) * 100) + "%"
        }
        </th>
        
      </tr>`
      : `
        <tr>
          <th>${index + 1}</th>
          <th>${user.userName}</th>
          <th>${user.lastWins}/${user.lastLosses}</th>
          <th>${
            user.lastWins + user.lastLosses === 0
              ? "N/A"
              : Math.round((user.lastWins / (user.lastWins + user.lastLosses)) * 100) + "%"
          }
          </th>
        </tr>`
  );

  return result;
}

function timedMatches() {
  let matches = getDays("matches");
  let tourneys = getDays("tournaments");
  const users = model.data.users;

  for (let match of matches) {
    for (let user of users) {
      if (
        (match.participants[0].matchScore === 10 && match.participants[0].playerId === user.id) ||
        (match.participants[1].matchScore === 10 && match.participants[1].playerId === user.id)
      ) {
        user.lastWins += 1;
      } else if (
        (match.participants[0].matchScore !== 10 && match.participants[0].playerId === user.id) ||
        (match.participants[1].matchScore !== 10 && match.participants[1].playerId === user.id)
      ) {
        user.lastLosses += 1;
      }
    }
  }

  for (let tourney of tourneys) {
    for (let user of users) {
      if (user.id === tourney.winnerId) {
        user.lastTourneyWins += 1;
        continue;
      }
      if (tourney.players.includes(user.id)) {
        user.lastTourneyLosses += 1;
      }
    }
  }
}

function resetLastMatches() {
  let users = model.data.users;
  for (let user of users) {
    user.lastWins = 0;
    user.lastLosses = 0;
    user.lastTourneyWins = 0;
    user.lastTourneyLosses = 0;
  }
}

function getDays(type) {
  let matches = model.data.matches;
  let tourneys = model.data.tournaments;
  let time = model.inputs.leaderboard.showLast;

  if (!time && type == "matches") {
    return matches;
  } else if (!time && type == "tournaments") {
    return tourneys;
  }

  let selectedDays = model.inputs.leaderboard.showLast;
  let daysInMs = selectedDays * 60 * 60 * 24 * 1000;
  let now = new Date().getTime();

  if (type == "matches") return matches.filter((match) => now - new Date(match.datePlayed).getTime() < daysInMs);
  else return tourneys.filter((tourney) => now - new Date(tourney.datePlayed).getTime() < daysInMs);
}
