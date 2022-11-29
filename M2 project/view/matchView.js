matchView();
function matchView() {
  const invited = model.inputs.newMatch.invitedPlayer;
  let view = model.app.view;

  let html = document.getElementById("app");
  let player = invited.map(
    (user) =>
      `<div class="opponentText"><span>${user}</span><button class="betterButton" onclick="deleteMatchPlayer()"><img class="removeIcon" src="assets/trash-can-solid.svg"></button></div>`
  );

  html.innerHTML = "";
  html.innerHTML = /*HTML*/ `
      
      <div class="logo-container">
        <img class='logo' src="assets/Logo.svg" alt="tennis icon"/>
      </div> 
        ${
          view === "match-started"
            ? `
          

                  <div class="match-player">
                    <div>
                      ${model.app.user}
                    </div>
                    <button class="match-btn">-</button>
                    <input style="width: 50px;" type="number" min="0" max="10" placeholder="0" class="scoreinput" onchange="model.inputs.newMatch.score[0] = parseInt(this.value)" />
                    <button class="match-btn">+</button>
                  </div>

                  
                  
                  <div class="match-player" style="margin-top: 15px;">
                    <div>
                      ${invited}
                    </div>
                    <button class="match-btn">-</button>
                    <input style="width: 50px;" type="number" min="0" max="10" placeholder="0" class="scoreinput" onchange="model.inputs.newMatch.score[0] = parseInt(this.value)">
                    <button class="match-btn">+</button>
                  </div>

                <button class="btn filled" onclick="completeMatch()">fullfør</button>
                <button class="btn" onclick="model.app.view = 'match-create'; matchView();">tilbake</button>
  `
            : `
            
         
              <input list="players" name="player" type="text" placeholder="legg til spiller" onchange="addMatchPlayer(this.value)">     
              <datalist class="datalist" id="players">
                  ${showUser()}
              </datalist>
        
            
            
                <div>${player.length === 0 ? "" : "vs"}</div>
                ${player.join("")}
            
            
            
                <button class="btn filled" onclick="newMatch()">start</button>
                <button class="btn" onclick="model.inputs.newMatch.invitedPlayer = []; menuView();">tilbake</button>
            `
        }
      `;
}

function newMatch() {
  if (model.inputs.newMatch.invitedPlayer.length === 1) {
    let now = new Date();
    model.inputs.newMatch.timeStarted = now.toISOString();
    model.app.view = "match-started";
    matchView();
  } else {
    alert("Velg en motstander!");
  }
}

function showUser() {
  let users = model.data.users;
  let playerList = "";

  for (let i = 0; i < users.length; i++) {
    if (model.inputs.newMatch.invitedPlayer.includes(users[i].userName)) {
      continue;
    }
    if (model.app.user != users[i].userName) {
      playerList += `<option value="${users[i].userName}">${users[i].userName}</option>`;
    }
  }
  return playerList;
}

function checkTime(timeWindow) {
  let matches = model.data.matches;
  let daysInMs = timeWindow * 60 * 60 * 24 * 1000;
  let dateToday = new Date();

  for (let i = 0; i < matches.length; i++) {
    let previousDate = new Date(matches[i].datePlayed);
    let timeSinceMatch = dateToday.getTime() - previousDate.getTime();
    if (timeSinceMatch < daysInMs) {
    }
  }
}

function test(timeWindow) {
  let daysInMs = timeWindow * 60 * 60 * 24 * 1000;
  let now = new Date().getTime();
  let test = model.data.matches.filter((match) => now - new Date(match.datePlayed).getTime() < daysInMs);
}
