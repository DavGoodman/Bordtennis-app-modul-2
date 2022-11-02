//match
let view = (model.app.view = "match");
//matchView();
function matchView() {
  let html = document.getElementById("app");
  let player = model.inputs.newMatch.invitedPlayer.map(
    (user) =>
      `<div class="opponentText"><span>${user}</span><button class="betterButton" onclick="deleteMatchPlayer()"><img class="removeIcon" src="assets/trash-can-solid.svg"></button></div>`
  );

  html.innerHTML = "";
  html.innerHTML = `
        <div class="container " style="padding-top: 13vh; padding-bottom: 2vh;">
            <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
        </div>
        <div>${
          view === "match"
            ? `
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
                <div class="btn" onclick"menuView()">tilbake</div>
              </div>`
            : `
              <div style="padding-bottom: 15vh;"></div>
              <div class="matchcontainer">
                <div class="gamescore">
                    <div style="grid-area: myMatchName;">Du</div>
                    <div style="grid-area: otherMatchName;">${model.inputs.newMatch.invitedPlayer}</div>
                </div>

                <div class="gamescore">
                    <div style="grid-area: scoreText">Score:</div>
                    <input class="scoreinput" style="grid-area: myScoreBox;" id="myScore">
                    <input class="scoreinput" style="grid-area: otherScoreBox;" id="otherScore">
                </div>
              </div>

              <div class="buttoncontainer">
                  <div class="btn filled" onclick="completeMatch(parseInt(myScore.value), parseInt(otherScore.value))">fullfør</div>
                  <div class="btn" onclick="matchView();">tilbake</div>
              </div>`
        }</div>
        `;
}

function showUser() {
  let users = model.data.users;
  let playerList = "";

  for (let i = 0; i < users.length; i++) {
    if (model.inputs.newMatch.invitedPlayer.includes(users[i].userName)) {
      continue;
    }
    playerList += `<option value="${users[i].userName}">${users[i].userName}</option>`;
  }
  return playerList;
}

function newMatch() {
  console.log("what");
  if (model.inputs.newMatch.invitedPlayer.length === 1) {
    view = model.app.view = "match-started";
  }
  matchView();
}

function completeMatch(my, other) {
  console.log(myScore.value);
  console.log(otherScore.value);
  if (my <= 10 && other <= 10) {
    //let score = model.inputs.newMatch.score;
    model.inputs.newMatch.score = [my, other];

    //finalizeMatchData(my, other, me, opponent);
  }
}

function finalizeMatchData(myScore, otherScore, myID, opponentID) {
  let matches = model.data.matches;
  let timeOfCompletion = new date.now();
  let makeMatchID = matches.length + 1;
  let newMatchData = {
    matchId: makeMatchID,
    datePlayed: timeOfCompletion,
    participants: [
      { playerId: myID, matchScore: myScore },
      { playerId: opponentID, matchScore: otherScore },
    ],
  };
  matches.push(newMatchData);
}
