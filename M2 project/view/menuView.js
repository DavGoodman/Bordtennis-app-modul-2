menuView();
function menuView() {
  model.app.view = "menu";
  let app = document.getElementById("app");
  let html = "";
  html += `

      <div class='menu-container'>
        <img class='logo' src="assets/table-tennis-paddle-ball-solid.svg" alt="tennis icon"/>
        <button onclick="matchView();" class="btn filled">Nytt spill</button>
        <button onclick="tournamentView()" class="btn filled">Ny turnering</button>
        <button onclick="leaderboardView()" class="btn filled">Ledertavle</button>
        <button onclick="historyView()" class="btn filled">Historikk</button>
        <button onclick="toLogin()" class="btn">Logg ut</button>
      </div>
        `;
  app.innerHTML = html;
}
