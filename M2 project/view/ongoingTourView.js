let num = 1

function ongoingTournamentView() {
  let participants = model.data.ongoingTournament.currentRoundParticipants;
  let round = model.data.ongoingTournament.currentRound;
  let app = document.getElementById("app");
  let html = "";

  if(round == 1 && !model.inputs.ongoingTournament.score[0]) {getPlayersAndByes(participants.length)}

  if(!model.inputs.ongoingTournament.score[0]) newBasicTournament()



  html += /*html*/ `
  <div style="display: flex; flex-direction: row; align-content: bottom; ">
    <img class='logo' src="assets/Logo.svg" alt="tennis icon"/>
  </div> 

  <h3 class="rnd-title">
    ${model.data.ongoingTournament.tournamentName}
  </h3>

  <div class="rnd-num">
    Runde ${model.data.ongoingTournament.currentRound}
  </div>
  <br>
  <div>
    ${drawMatch()}
  </div>
  <br>
  <button class="btn filled" onclick="nextRound()">
    Neste Runde
  </button>
  `;




  app.innerHTML = html;
}




function tRound() {
  // for å oppdatere view med rundenummer.
  model.app.view = "round-" + model.data.ongoingTournament.currentRound;
}




function newBasicTournament() {
  console.log("new tournament round...")
  let ongoing = model.data.ongoingTournament;
  let currentParticipants = ongoing.currentRoundParticipants;
  let scoreInputs = model.inputs.ongoingTournament.score;
  let matchNum = currentParticipants.length / 2;
  let roundArray = [];
  let waiting = model.data.ongoingTournament.waitingParticipants;
  let round = model.data.ongoingTournament.currentRound;

  if (waiting && round !== 1) {
    model.data.ongoingTournament.currentRoundParticipants = currentParticipants.concat(waiting);
    model.data.ongoingTournament.waitingParticipants = [];
    currentParticipants = model.data.ongoingTournament.currentRoundParticipants;
  }

  if (roundArray.length < matchNum) {
    for (let i = 0; i < currentParticipants.length; i = i + 2) {
      let matchArray = [];
      matchArray.push(currentParticipants[i]);
      matchArray.push(currentParticipants[i + 1]);

      
      scoreInputs.push([
        { playerId: currentParticipants[i], matchScore: 0 },
        { playerId: currentParticipants[i + 1], matchScore: 0 },
      ]);
      roundArray.push(matchArray);
    }
  }



}


function drawMatch(){
  let matchHtml = "";
  let waiting = model.data.ongoingTournament.waitingParticipants;
  let roundArray = model.inputs.ongoingTournament.score

  console.log(waiting, roundArray)

  for (let i = 0; i < roundArray.length; i++) {
    matchHtml += `<div class="bracket-list">`; // start på en ramme rundt hver kamp.
    for (let j = 0; j < roundArray[i].length; j++) {
      matchHtml += /*HTML*/ `

      
      <div class="match-player" style="margin-top: 5px;">

        <div>
          ${roundArray[i][j].playerId}
        </div>

        <button onclick="tMinusOne(${i}, ${j}); ongoingTournamentView()" class="match-btn">-</button>

        <input required="true" max=10 min=0 class="score-input" type="number" maxlength="2"
        value="${model.inputs.ongoingTournament.score[i][j].matchScore}"
        oninput="model.inputs.ongoingTournament.score[${i}][${j}].matchScore = parseInt(this.value)"
        >

        <button onclick="tPlusOne(${i}, ${j}); ongoingTournamentView()" class="match-btn">+</button>

      </div>

      `;
    }
    matchHtml += /*HTML*/ `</div>
    <br>`; //  stopp på ramme.
  }

  waiting = model.data.ongoingTournament.waitingParticipants;
  let waitList = waiting.map((person) => `<div style="padding: 5px;">${person}</div>`);


  matchHtml += `
  ${
    waiting[0]
      ? `<div class="waiting-header" >Venteliste:</div>
  <div class="waiting-list">
    ${waitList.join("")}
  </div>`
      : ""
  }`;


  return matchHtml;
}


function tPlusOne(match, player) {
  console.log(match, player)
  if (model.inputs.ongoingTournament.score[match][player].matchScore < 10) {
    model.inputs.ongoingTournament.score[match][player].matchScore++;
  }
}

function tMinusOne(match, player) {
  if (model.inputs.ongoingTournament.score[match][player].matchScore > 0) {
    model.inputs.ongoingTournament.score[match][player].matchScore--;
  }
}
