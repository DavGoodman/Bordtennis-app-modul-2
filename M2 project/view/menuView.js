// menuView();
function menuView() {
  model.app.view = "menu";
  let app = document.getElementById("app");
  let html = "";
  html += `
  <div onclick="toLogin('login')">  
    <i class="fa-solid fa-right-from-bracket log-out-btn"></i>
  </div>    
      <div class='menu-container'>
      <div style="display: flex; flex-direction: row; align-content: bottom; ">
        <img class='logo' src="assets/Logo.svg" alt="tennis icon"/>
      </div>  
        <button onclick="matchView();" class="btn filled">SPILL</button>
        <button onclick="tournamentView()" class="btn ">TURNERING</button>
        <button onclick="leaderboardView()" class="btn ">LEDERTAVLE</button>
        <button onclick="historyView()" class="btn ">HISTORIKK</button>
      </div>
        `;
  app.innerHTML = html;
}
