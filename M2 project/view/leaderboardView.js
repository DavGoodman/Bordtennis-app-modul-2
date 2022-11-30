leaderboardView();
function leaderboardView() {
  let app = document.getElementById("app");
  let html = "";
  let inputs = model.inputs.leaderboard;
  html += /*HTML*/ `
  <div class="top-container">
    <div class="logout-div" onclick="toLogin('login')">  
    <i class="fa-solid fa-arrow-right-from-bracket log-out-btn"></i>
    </div>
    <div class="logo-container">
      <svg width="155" height="97" viewBox="0 0 155 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M78.4396 67.1264C78.2888 66.5116 78.051 65.9722 77.7262 65.5082C77.4014 65.0326 76.9954 64.6323 76.5082 64.3075C76.0326 63.9711 75.4757 63.7217 74.8377 63.5593C74.2113 63.3853 73.5211 63.2983 72.767 63.2983C71.143 63.2983 69.7567 63.6869 68.6083 64.4641C67.4715 65.2414 66.6014 66.3608 65.9982 67.8224C65.4066 69.2841 65.1108 71.0473 65.1108 73.1122C65.1108 75.2003 65.395 76.9867 65.9634 78.4716C66.5318 79.9564 67.3787 81.0933 68.5039 81.8821C69.6291 82.6709 71.027 83.0653 72.6974 83.0653C74.1707 83.0653 75.3945 82.8507 76.369 82.4215C77.355 81.9923 78.0916 81.3833 78.5788 80.5945C79.0661 79.8056 79.3097 78.8776 79.3097 77.8104L80.9801 77.9844H72.8366V71.0938H88.6364V76.0355C88.6364 79.2836 87.9461 82.0619 86.5657 84.3704C85.1969 86.6673 83.306 88.4305 80.8931 89.6602C78.4918 90.8782 75.7367 91.4872 72.6278 91.4872C69.1593 91.4872 66.1142 90.7506 63.4925 89.2773C60.8709 87.8041 58.8234 85.7044 57.3501 82.9783C55.8885 80.2522 55.1577 77.0099 55.1577 73.2514C55.1577 70.3049 55.6043 67.6948 56.4975 65.4212C57.4023 63.1475 58.6552 61.2276 60.256 59.6616C61.8569 58.0839 63.7072 56.8949 65.8068 56.0945C67.9065 55.2824 70.157 54.8764 72.5582 54.8764C74.6695 54.8764 76.63 55.178 78.4396 55.7812C80.2609 56.3729 81.8675 57.2197 83.2596 58.3217C84.6632 59.4122 85.7943 60.7056 86.6527 62.2021C87.5111 63.6985 88.0331 65.34 88.2188 67.1264H78.4396ZM93.1475 91V55.3636H118.831V63.1591H102.822V69.2841H117.508V77.0795H102.822V83.2045H118.761V91H93.1475ZM122.654 63.1591V55.3636H153.627V63.1591H142.909V91H133.373V63.1591H122.654Z" fill="#EE7100"/>
      <path d="M72.6093 50.2677C63.8652 50.2677 56.2729 55.294 52.6077 62.6241L12.0286 22.0469L12.1333 21.9422L22.6228 11.4532C37.8945 -3.81774 62.6434 -3.81774 77.9151 11.4532C89.6263 23.1639 92.3491 40.4768 86.0833 54.7879C82.3483 51.9431 77.6708 50.2677 72.6093 50.2677ZM8.60771 26.5148L50.6355 68.5405C50.3911 69.8494 50.269 71.2107 50.269 72.6069C50.269 76.6559 51.3511 80.4431 53.2186 83.7242C52.695 83.7591 52.1539 83.7765 51.6129 83.7765H51.1416C45.2249 83.7765 39.5351 81.4204 35.3463 77.2318L33.6359 75.5215C31.3495 73.2352 27.597 73.3574 25.4677 75.8182L15.3971 87.4416C14.3848 88.6109 12.9187 89.309 11.3828 89.3614C9.8469 89.4137 8.32846 88.8203 7.2289 87.7208L1.64381 82.136C0.544249 81.0365 -0.0491667 79.5356 0.00319343 77.9998C0.0555536 76.4639 0.753689 74.9979 1.92307 73.9857L13.547 63.9156C15.9905 61.7863 16.1301 58.034 13.8437 55.7478L12.1333 54.0374C7.94449 49.8314 5.58828 44.1418 5.58828 38.2254V37.7542C5.58828 33.775 6.65293 29.918 8.60771 26.5322V26.5148Z" fill="#072D35"/>
      </svg>
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
    <div class="selection">
    <label style="margin-top: 5px;" for="choose">
    <svg class="filter-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z"/></svg>
    </label>
    <select onchange="sortBy(this)" name="choose">
    ${getOptions()};
    </select>
    </div>
    
    ${getWins()}
  </div>
    <div class="button-container" style="height: 11.25vh">
    <button class="btn" onclick="menuView()">tilbake</button>
    </div>
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
