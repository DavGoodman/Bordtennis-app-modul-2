//leaderboardView()
function leaderboardView() {
  let app = document.getElementById("app");
  let html = "";
  let inputs = model.inputs.leaderboard;
  html += /*HTML*/ `
    <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
    <div class="leaderboard-categories">
        <span 
        ${inputs.category === "tournaments" ? `class="selected"` : ""}
        onclick="ChangeCategory('tournaments')"
        >Tournaments</span>
        <span 
        ${inputs.category === "matches" ? `class="selected"` : ""}
        onclick="ChangeCategory('matches')"
        >matches</span>
    </div>
    <div class="date-sort-leaderboard">
      <span>last week</span>
      <span>last month</span>
      <span>last year</span>
      <span>all time</span>
    </div>

    <label for="choose">sort by</label>
    <select onchange="sortBy(this)" name="choose">
      ${getOptions()};
    </select>

    ${getWins()}
    `;
  app.innerHTML = html;
}

function getOptions() {
  let selectedOptionIndex = model.app.leaderboradSelectIndex;

  let html = ``;
  let options = ["wins", "win rate"];

  options.forEach((option, index) => {
    let isSelected = index === selectedOptionIndex ? "selected" : "";
    html += `<option value="${option}" ${isSelected}>${option}</option>`;
  });

  return html;
}

function getWins(winType) {
  let wins = getStats()

  html = `
    <table style="width:100%">
      <tr>
        <th>Rank</th>
        <th>W/L</th>
        <th>Win rate</th>
        <th>Name</th>
      </tr>
      ${wins.join("")}
    </table>
    `;
  return html;
}

function getStats() {
  let category = model.inputs.leaderboard.category
  let sortBy = model.inputs.leaderboard.sortBy
  let users = model.data.users
  
  // Getting tournaments
  if (category === "tournaments") {  
    let tournamentWinners = []
    if (sortBy === "wins") {
      tournamentWinners = users.sort((a, b) => (a.tournamentWins < b.tournamentWins) ||
        a.tournamentLosses + a.tournamentWins === 0 ? 1 : -1)
    }
  else {
    tournamentWinners = users.sort((a, b) =>
      a.tournamentWins / (a.tournamentWins + a.tournamentLosses) <
        b.tournamentWins / (b.tournamentWins + b.tournamentLosses) ||
        a.tournamentLosses + a.tournamentWins === 0 ? 1 : -1)


  return tournamentWinners.map((user, index) => `
    <tr>
      <th>${index + 1}</th>
      <th>${user.tournamentWins}/${user.tournamentLosses}</th>
      <th>${user.tournamentWins + user.tournamentLosses === 0 ? "N/A" :
      Math.round(user.tournamentWins / (user.tournamentWins + user.tournamentLosses) * 100) + "%"}
      </th>
      <th>${user.userName}</th>
    </tr>`)}}




  // Getting matches
  let matchWinners = []
  if (sortBy === "wins") {
    matchWinners = users.sort((a, b) => (a.wins < b.wins || a.losses + a.wins === 0 ? 1 : -1));
  } else {
    matchWinners = users.sort((a, b) =>
      a.wins / (a.wins + a.losses) < b.wins / (b.wins + b.losses) || a.losses + a.wins === 0 ? 1 : -1
    );
  }

  return matchWinners.map(
    (user, index) => `
      <tr>
        <th>${index + 1}</th>
        <th>${user.wins}/${user.losses}</th>
        <th>${Math.round((user.wins / (user.wins + user.losses)) * 100)}
        %</th>
        <th>${user.userName}</th>
      </tr>`)

}
















































// function getMatchWinners(){
//   let sortBy = model.inputs.leaderboard.sortBy
//   let users = model.data.users

//   let matchWinners = []
//   if (sortBy === "wins") {
//     matchWinners = users.sort((a, b) => (a.wins < b.wins) ||
//       a.losses + a.wins === 0 ? 1 : -1)
//   }
//   else {
//     matchWinners = users.sort((a, b) =>
//       a.wins / (a.wins + a.losses) <
//         b.wins / (b.wins + b.losses) ||
//         a.losses + a.wins === 0 ? 1 : -1)
//   }

//   return matchWinners.map((user, index) => `
//       <tr>
//         <th>${index + 1}</th>
//         <th>${user.wins}/${user.losses}</th>
//         <th>${Math.round(user.wins / (user.wins + user.losses) * 100)}
//         %</th>
//         <th>${user.userName}</th>
//       </tr>`)
// }



// function getTourneyWinners(){
//   let sortBy = model.inputs.leaderboard.sortBy
//   let users = model.data.users

//   let tournamentWinners = []
//   if (sortBy === "wins") {
//     tournamentWinners = users.sort((a, b) => (a.tournamentWins < b.tournamentWins) ||
//       a.tournamentLosses + a.tournamentWins === 0 ? 1 : -1)
//   }
//   else {
//     tournamentWinners = users.sort((a, b) =>
//       a.tournamentWins / (a.tournamentWins + a.tournamentLosses) <
//         b.tournamentWins / (b.tournamentWins + b.tournamentLosses) ||
//         a.tournamentLosses + a.tournamentWins === 0 ? 1 : -1)


//   return tournamentWinners.map((user, index) => `
//     <tr>
//       <th>${index + 1}</th>
//       <th>${user.tournamentWins}/${user.tournamentLosses}</th>
//       <th>${user.tournamentWins + user.tournamentLosses === 0 ? "N/A" :
//       Math.round(user.tournamentWins / (user.tournamentWins + user.tournamentLosses) * 100) + "%"}
//       </th>
//       <th>${user.userName}</th>
//     </tr>`)
// }
// }


// function getTourneyWins(){
//   let users = model.data.users

//   let tournamentWinners = users.sort((a, b) => (a.tournamentWins < b.tournamentWins)? 1: -1)

//   return tournamentWinners.map((user, index) => `
//       <tr>
//         <th>${index + 1}</th>
//         <th>${user.tournamentWins}/${user.tournamentLosses}</th>
//         <th>${Math.round(user.tournamentWins / (user.tournamentWins + user.tournamentLosses) * 100)}
//         %</th>
//         <th>${user.userName}</th>
//       </tr>`)

// }
