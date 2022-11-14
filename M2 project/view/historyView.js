historyView();

function historyView() {
  model.app.user = 'dankert';
  model.app.view = "history";
  let currentUser = getLoggedInUserId();
  let app = document.getElementById("app");

  const recentMatches = listAllEvents(currentUser).splice(0, 5).map(
    item => Object.hasOwn(item, 'matchId') ? `
    <tr>
      <td>${item.matchId}</td>
      <td>Frank</td>
      <td>${convertTime(item.datePlayed)}</td>
    </tr>
    `
      :
      `
      <tr>
        <td>${item.tournamentName}</td>
        <td>${item.winnerId}</td>
        <td>${convertTime(item.datePlayed)}</td>
      </tr>
    `);

  const allMatches = listAllEvents(currentUser).map(
    item => Object.hasOwn(item, 'matchId') ? `
      <tr>
        <td>${item.matchId}</td>
        <td>Frank</td>
        <td>${convertTime(item.datePlayed)}</td>
      </tr>
      `
      :
      `
        <tr>
          <td>${item.tournamentName}</td>
          <td>${item.winnerId}</td>
          <td>${convertTime(item.datePlayed)}</td>
        </tr>
      `);

  let html = "";

  html += /*html*/ `
        <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
        <table>
            <thead style="background-color: black">
                <tr>
                    <th>Tittel</th>
                    <th>Vinner</th>
                    <th>Dato</th>
                </tr>
            </thead>
            <tbody>
                ${model.inputs.history.showAll === false ? recentMatches.join('') : allMatches.join('')}
            </tbody>
        </table>
        <button class="btn filled" onclick="model.inputs.history.showAll = !model.inputs.history.showAll; historyView()">vis ${model.inputs.history.showAll === false ? ' fler' : ' mindre'}</button>
        <button class="btn" onclick="menuView()">tilbake</button>
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