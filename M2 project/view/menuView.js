// menuView();
function menuView() {
  model.app.view = "menu";
  let app = document.getElementById("app");
  let html = "";
  html += `
  <div class="top-container">
    <div class="logout-div" onclick="toLogin('login')">  
      <i class="fa-solid fa-arrow-right-from-bracket log-out-btn"></i>
    </div>    
    <div style="width: 80%">
      <img class='logo' src="assets/Logo.svg" alt="tennis icon"/>
    </div>
  </div><div class="button-container" style="height: 40vh">
    <button onclick="matchView();" class="btn filled">SPILL</button>
    <button onclick="tournamentView()" class="btn ">TURNERING</button>
    <button onclick="leaderboardView()" class="btn ">LEDERTAVLE</button>
    <button onclick="historyView()" class="btn ">HISTORIKK</button>
  </div> 
        `;
  app.innerHTML = html;
}
//  style="display: flex; flex-direction: row; align-content: bottom; " for logo div
