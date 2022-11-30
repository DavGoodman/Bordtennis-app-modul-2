function tournamentView() {
  let app = document.getElementById("app");
  let html = "";
  let players = model.inputs.newTournament.participants.map(
    (user) =>
      `<div style="display: flex; justify-content: space-between; padding: 1rem"><span>${user}</span>
      <button class="del-player-btn" onclick="deletePlayer('${user}');">x</button></div>`
  );
  html += `
  
        
        <div class="" style="position: relative;">
          <img class='logo' src="assets/Logo.svg" alt="tennis icon"/>
        </div>    
        <input oninput="model.inputs.newTournament.tournamentName = this.value" type="text" placeholder="turneringsnavn">
        <input list="players" name="player" type="text" placeholder="legg til spiller" onchange="addPlayer(this.value);">
        <div class="player-list" style="display: flex; flex-direction: column;">
            ${players.join("")}
        </div>
        <datalist id="players">
            ${listUsers()}
        </datalist>
        <button onclick="commitPlayers()" class="btn filled">lag turnering</button>
        <button class="btn" onclick="menuView()">avbryt</button>
        
         `;
  app.innerHTML = html;
}

function listUsers() {
  let users = model.data.users;
  let playerList = "";
  for (let i = 0; i < users.length; i++) {
    if (model.inputs.newTournament.participants.includes(users[i].userName)) {
      continue;
    }
    playerList += `<option value="${users[i].userName}">${users[i].userName}</option>`;
  }
  return playerList;
}
