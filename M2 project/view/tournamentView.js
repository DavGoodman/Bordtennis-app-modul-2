tournamentView();

function tournamentView() {
  let app = document.getElementById("app");
  let html = "";
  let players = model.inputs.newTournament.participants.map(
    (user) =>
      `<div style="color: black; display: flex; justify-content: space-between; padding: 1rem"><span>${user}</span><button onclick="deletePlayer('${user}');">X</button></div>`
  );
  html += `
  
        <div class='tournament-container'>
            <img class='logo' src="assets/table-tennis-paddle-ball-solid.svg" alt="tennis icon"/>
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
        </div>
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
