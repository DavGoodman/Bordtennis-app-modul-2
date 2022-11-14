let showAll = false; //spør om lov senere

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
      <td>${item.datePlayed}</td>
    </tr>
    `
      :
      `
      <tr>
        <td>${item.tournamentName}</td>
        <td>${item.winnerId}</td>
        <td>${item.datePlayed}</td>
      </tr>
    `);

  const allMatches = listAllEvents(currentUser).map(
    item => Object.hasOwn(item, 'matchId') ? `
      <tr>
        <td>${item.matchId}</td>
        <td>Frank</td>
        <td>${item.datePlayed}</td>
      </tr>
      `
      :
      `
        <tr>
          <td>${item.tournamentName}</td>
          <td>${item.winnerId}</td>
          <td>${item.datePlayed}</td>
        </tr>
      `);

  let html = "";

  html += /*html*/ `
        <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
        <table>
            <thead>
                <tr>
                    <th>Tittel</th>
                    <th>Vinner</th>
                    <th>Dato</th>
                </tr>
            </thead>
            <tbody>
                ${showAll === false ? recentMatches.join('') : allMatches.join('')}
            </tbody>
        </table>
        <button class="btn filled" onclick="showAll = !showAll; historyView()">Vis ${showAll === false ? ' fler' : ' mindre'}</button>
    `;

  app.innerHTML = html;

  let test = listAllEvents(currentUser);



  console.log(test);
  console.log(showAll, !showAll)
}

function getLoggedInUserId() { // Gets the ID of current logged in user
  let userId;
  let users = model.data.users

  for (let i = 0; i < users.length; i++) {
    if (users[i].userName === model.app.user) {
      userId = users[i].id
    }
  }
  console.log(userId)
  return userId
}

function listAllEvents(loggedInUser) {
  //List all matches of current user
  const matches = model.data.matches.filter(
    (match) => loggedInUser === match.participants[0].playerId || loggedInUser === match.participants[1].playerId
  );
  console.log(matches);
  //List all tournaments of current user
  const tMatches = model.data.tournaments.filter(
    (tournament) => tournament.players.includes(loggedInUser)
  );
  console.log(tMatches);
  //Join the two lists two a new list (non-intrusive)

  const allMatches = matches.concat(tMatches)
  console.log('before', allMatches)

  //Sort all events by date
  allMatches.sort((a, b) => {
    if (a.datePlayed > b.datePlayed) {
      return -1;
    } else if (a.datePlayed < b.datePlayed) {
      return 1;
    } else { return 0 };
  }
  )
  console.log('after', allMatches)

  return allMatches;
}
