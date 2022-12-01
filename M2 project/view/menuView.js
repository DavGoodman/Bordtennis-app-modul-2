// menuView();
function menuView() {
  model.app.view = "menu";
  let app = document.getElementById("app");
  let html = "";
  html += /*HTML*/ `
    <div class="logout-div" onclick="toLogin('login')">  
      <i class="fa-solid fa-arrow-right-from-bracket log-out-btn"></i>
    </div>

    <div class="logo-container">
      <img class='logo' src="assets/Logo.svg" alt="tennis icon"/>
    </div>

    <div class="button-container" style="height: 40vh">
      <button onclick="matchView();" class="btn filled">spill</button>
      <button onclick="tournamentView()" class="btn ">turnering</button>
      <button onclick="leaderboardView()" class="btn ">ledertavle</button>
      <button onclick="historyView()" class="btn ">historikk</button>
    </div> 
        `;
  app.innerHTML = html;
}
