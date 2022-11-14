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
        <div class="container " style="padding-top: 13vh; padding-bottom: 2vh;">
            <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
        </div>
        <div>${
          view === "match-started"
            ? `
            <div style="padding-bottom: 15vh;"></div>
            <div class="matchcontainer">
              <div class="gamescore">
                  <div style="grid-area: myMatchName;">Du</div>
                  <div style="grid-area: otherMatchName;">${invited}</div>
              </div>

              <div class="gamescore">
                  <div style="grid-area: scoreText">Score:</div>
                  <input type="number" min="0" max="10" class="scoreinput" style="grid-area: myScoreBox;" onchange="model.inputs.newMatch.score[0] = parseInt(this.value)">
                  <input type="number" min="0" max="10" class="scoreinput" style="grid-area: otherScoreBox;" onchange="model.inputs.newMatch.score[1] = parseInt(this.value)">
              </div>
            </div>

            <div class="buttoncontainer">
                <div class="btn filled" onclick="completeMatch()">fullfør</div>
                <div class="btn" onclick="matchView();">tilbake</div>
            </div>`
            : `
            <div class="container ">
              <div class="inputField">
                <input class="textField" list="players" name="player" type="text" placeholder="legg til spiller" onchange="addMatchPlayer(this.value)">     
                <datalist id="players">
                    ${showUser()}
                </datalist>
              </div>
            </div>
            <div class="container " style="padding-bottom: 14vh;">
              <div class="listcontainer container">
                <div class="versusText">${player.length === 0 ? "" : "vs"}</div>
                ${player.join("")}
              </div>
            </div>
            <div class="buttoncontainer">
              <div class="btn filled" onclick="newMatch()">start</div>
              <div class="btn" onclick="menuView()">tilbake</div>
            </div>`
        }</div>
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
      playerList += `<option class="player-option" value="${users[i].userName}">${users[i].userName}</option>`;
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
