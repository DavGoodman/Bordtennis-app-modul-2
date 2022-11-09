historyView();
function historyView() {
  model.app.user = 'dankert';
  model.app.view = "history";
  let currentUser = getLoggedInUserId();
  let app = document.getElementById("app");

  let html = "";
  let matches = model.data.matches;
  let tournaments = model.data.tournaments;

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
                <tr>
                    <td>Deg VS </td>
                </tr>
            </tbody>
        </table>
    `;

  app.innerHTML = html;
  checkMatches(currentUser);
  checkTournaments(currentUser)
}

function checkMatches(loggedInUser) { //makes new array of all matches current logged in user has played in (all time)
  const matches = model.data.matches.filter(
    (match) => loggedInUser === match.participants[0].playerId || loggedInUser === match.participants[1].playerId
  );
  console.log(matches);
}

function checkTournaments(loggedInUser) { //makes array of all tournaments current logged in user has played in (all time)
  const tMatches = model.data.tournaments.filter(
    (tournament) => tournament.players.includes(loggedInUser)
  );
  console.log(tMatches);
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
