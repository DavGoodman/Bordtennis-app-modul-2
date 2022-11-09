//historyView();
function historyView() {
  model.app.view = "history";
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
                    <td>Deg VS ${getUserName(2)}</td>
                </tr>
            </tbody>
        </table>
    `;

  app.innerHTML = html;
}

function checkMatches() {
  const matches = model.data.matches.filter(
    (match) => loggedInUser === match.participants[0].playerId || model.user === match.participants[1].playerId
  );
  console.log(matches);
}

function checkTournaments() {
  const tMatches = model.data.tournaments.filter(
    (match) => model.user === match.participants[0].playerId || model.user === match.participants[1].playerId
  );
  console.log(tMatches);
}
