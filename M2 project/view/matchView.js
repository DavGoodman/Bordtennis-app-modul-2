// let view = model.app.view;
// model.app.user = "HeisenBerg";
// view = "match";
// matchView();

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
    playerList += `<option class="player-option" value="${users[i].userName}">${users[i].userName}</option>`;
  }
  return playerList;
}

function newMatch() {
  if (model.inputs.newMatch.invitedPlayer.length === 1) {
    view = "match-started";
  }
  matchView();
}

function completeMatch(my, other) {
  if (my < 0 || other < 0 || my > 10 || other > 10 || (my == 10 && other == 10)) {
    alert("Du må sette riktig score!");
  } else {
    model.inputs.newMatch.score = [my, other];
    finalizeMatchData();
  }
}

function finalizeMatchData() {
  let users = model.data.users;
  let opponent = model.inputs.newMatch.invitedPlayer;
  let finalScore = model.inputs.newMatch.score;
  let matches = model.data.matches;
  let myID;
  let opponentID;

  // finding my own ID - for now.
  for (let i = 0; i < users.length; i++) {
    if (users[i].userName == model.app.user) {
      myID = users[i].id;
      break;
    }
  }

  // finding opponent's ID.
  for (let i = 0; i < users.length; i++) {
    if (users[i].userName == opponent) {
      opponentID = users[i].id;
      break;
    }
    // passing guestname as ID. (?)
    if (i == users.length - 1) {
      opponentID = opponent[0];
      console.log("Guest-user: " + opponentID);
    }
  }

  let today = new Date();
  let timeOfCompletion = today.toISOString();
  let makeMatchID = matches.length + 1;

  let newMatchData = {
    matchId: makeMatchID,
    datePlayed: timeOfCompletion,
    participants: [
      { playerId: myID, matchScore: finalScore[0] },
      { playerId: opponentID, matchScore: finalScore[1] },
    ],
  };
  matches.push(newMatchData);
}

function checkTime(timeWindow) {
  let matches = model.data.matches;
  let daysInMs = timeWindow * 60 * 60 * 24 * 1000;
  let dateToday = new Date();

  for (let i = 0; i < matches.length; i++) {
    let previousDate = new Date(matches[i].datePlayed);
    let timeSinceMatch = dateToday.getTime() - previousDate.getTime();
    if (timeSinceMatch < daysInMs) {
      console.log("its less than " + timeWindow + " days and i = " + i);
    }
  }
}

//test(7);
function test(timeWindow) {
  let daysInMs = timeWindow * 60 * 60 * 24 * 1000;

  let now = new Date().getTime();

  let test = model.data.matches.filter((match, matchId) => now - new Date(match.datePlayed).getTime() < daysInMs);
  // model.data.matches[i]

  // let smt = model.data.matches.map((match, index)=> `
  //   <div onclick="deleteThis(${index})">${match.datePlayed}</div>
  // `)

  console.log(test);
}
