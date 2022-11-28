// historyView();


function historyView() {
  model.app.view = "history";
  let currentUser = getLoggedInUserId();
  let app = document.getElementById("app");

  const recentMatches = listAllEvents(currentUser).splice(0, 5).map(
    item => Object.hasOwn(item, 'matchId') ? `
    <tr onclick="clickRow()">
      <td>vs ${getOpponent(item)}</td>
      <td>${getMatchWinner(item.participants)}</td> 
      <td>${convertTime(item.datePlayed)}</td>
    </tr>
    `
      :
      `
      <tr onclick="clickRow()">
        <td>${item.tournamentName}</td>
        <td>${getUserName(item.winnerId)}</td>
        <td>${convertTime(item.datePlayed)}</td>
      </tr>
    `);

  const allMatches = listAllEvents(currentUser).map(
    item => Object.hasOwn(item, 'matchId') ? `
      <tr onclick="clickRow()">
        <td>vs ${getOpponent(item)}</td>
        <td>${getMatchWinner(item.participants)}</td>
        <td>${convertTime(item.datePlayed)}</td>
      </tr>
      `
      :
      `
        <tr onclick="clickRow()">
          <td>${item.tournamentName}</td>
          <td>${getUserName(item.winnerId)}</td>
          <td>${convertTime(item.datePlayed)}</td>
        </tr>
      `);

  let html = "";

  html += /*html*/ `
  <div class="history-container">
        <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
      ${recentMatches.length == 0 ? 'Du har ikke spilt noen kamper' : `
      
          <table>
            <thead style="background-color: black; color: white;">
              <tr>
                  <th>Tittel</th>
                  <th>Vinner</th>
                  <th>Dato</th>
              </tr>
              </thead>
              <tbody>
                  ${model.inputs.history.showAll === false ? recentMatches.join('') : allMatches.join('')}
              </tbody>
          </table> `}
        <button class="btn filled" onclick="model.inputs.history.showAll = !model.inputs.history.showAll; historyView()">vis ${model.inputs.history.showAll === false ? ' fler' : ' mindre'}</button>
        <button class="btn" onclick="menuView()">tilbake</button>
        </div>
    `;

  app.innerHTML = html;
}

function getLoggedInUserId() { // Gets the ID of current logged in user
  let userId;
  let users = model.data.users

  for (let i = 0; i < users.length; i++) {
    if (users[i].userName === model.app.user) {
      userId = users[i].id
    }
  }
  return userId
}

function listAllEvents(loggedInUser) {
  //List all matches of current user
  const matches = model.data.matches.filter(
    (match) => loggedInUser === match.participants[0].playerId || loggedInUser === match.participants[1].playerId
  );
  //List all tournaments of current user
  const tMatches = model.data.tournaments.filter(
    (tournament) => tournament.players.includes(loggedInUser)
  );
  //Join the two lists two a new list (non-intrusive)
  const allMatches = matches.concat(tMatches)
  //Sort all events by date
  allMatches.sort((a, b) => {
    if (a.datePlayed > b.datePlayed) {
      return -1;
    } else if (a.datePlayed < b.datePlayed) {
      return 1;
    } else { return 0 };
  }
  )
  return allMatches;
}

function convertTime(t) {
  d = new Date(t);
  let date = d.toLocaleDateString('nb-no');
  let time = d.toLocaleTimeString('nb-no');
  date = date.slice(0, -4) + date.slice(-2, date.length);
  time = time.slice(0, -3);

  return date + ' ' + time;
}

function getUserName(id) {
  const user = model.data.users.filter(item => item.id === id)
  return user[0].userName
}

function getMatchWinner(matchup) {
  const winner = matchup.filter(player => player.matchScore === 10)
  return typeof winner[0].playerId === 'string' ? winner[0].playerId : getUserName(winner[0].playerId)
}

function getOpponent(matchup) {
  const opponent = matchup.participants.filter(item => item.playerId != getLoggedInUserId())
  return typeof opponent[0].playerId === 'string' ? opponent[0].playerId : getUserName(opponent[0].playerId)
}

function clickRow() {
  console.log('hei')
}