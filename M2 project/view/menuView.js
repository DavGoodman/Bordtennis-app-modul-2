function menuView() {
  model.app.view = 'menu';
  let app = document.getElementById("app");
  let html = "";
  html += `

      <div class='menu-container'>
        <img class='logo' src="assets/table-tennis-paddle-ball-solid.svg" alt="tennis icon"/>
        <button onclick="setView('match')" class="btn filled">Nytt spill</button>
        <button onclick="setView('tournament')" class="btn filled">Ny turnering</button>
        <button onclick="setView('leaderboard')" class="btn filled">Ledertavle</button>
        <button onclick="setView('history')" class="btn filled">Historie</button>
      </div>
        `;
  app.innerHTML = html;
}

function setView(view) {
  model.app.view = view;
}