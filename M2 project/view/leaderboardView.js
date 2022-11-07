leaderboardView()
function leaderboardView() {
  let app = document.getElementById("app");
  let html = "";
  let inputs = model.inputs.leaderboard
  html += /*HTML*/`
    <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
    <div class="leaderboard-categories">
        <span 
        ${inputs.category === "tournaments"? `class="selected"` : ""}
        onclick="ChangeCategory('tournaments')"
        >Tournaments</span>
        <span 
        ${inputs.category === "matches"? `class="selected"` : ""}
        onclick="ChangeCategory('matches')"
        >matches</span>
    </div>

    <label for="choose">sort by</label>
    <select onchange="" name="choose">
        <option value="wins">wins</option>
        <option value="win rate">win rate</option>
    </select>

    ${getWins()}
    `;
  app.innerHTML = html;
}


function getWins(winType){
  let wins = getStats()
  

  html= `
    <table style="width:100%">
      <tr>
        <th>Rank</th>
        <th>W/L</th>
        <th>Win rate</th>
        <th>Name</th>
      </tr>
      ${wins.join("")}
    </table>
    `
    return html
}



function getStats(){
  let category = model.inputs.leaderboard.category
  let users = model.data.users

  let matchWinners = users.sort((a, b) => (a.wins < b.wins) ? 1 : -1)
  console.log(matchWinners)
  
  let tournamentWinners = users.sort((a, b) => (a.tournamentWins < b.tournamentWins)? 1: -1)

  
  if(category === "tournaments"){
    return tournamentWinners.map((user, index) => `
      <tr>
        <th>${index + 1}</th>
        <th>${user.tournamentWins}/${user.tournamentLosses}</th>
        <th>${Math.round(user.tournamentWins / (user.tournamentWins + user.tournamentLosses) * 100)}
        %</th>
        <th>${user.userName}</th>
      </tr>`)
  }

  return matchWinners.map((user, index) => `
      <tr>
        <th>${index + 1}</th>
        <th>${user.wins}/${user.losses}</th>
        <th>${Math.round(user.wins / (user.wins + user.losses) * 100)}
        %</th>
        <th>${user.userName}</th>
      </tr>`)
}


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