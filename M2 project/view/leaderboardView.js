//leaderboardView()
function leaderboardView() {
  let app = document.getElementById("app");
  let html = "";
  html += `
    <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
    <h1>
        <span>Tournaments</span>
        <span>matches</span>
    </h2>

    <label for="choose">sort by</label>
    <select name="choose">
        <option value="wins">wins</option>
        <option value="win rate">win rate</option>
    </select>
    `;
  app.innerHTML = html;
}
