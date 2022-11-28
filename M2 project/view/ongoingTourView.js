function ongoingTournamentView() {
  model.inputs.ongoingTournament.score = [];
  let participants = model.data.ongoingTournament.currentRoundParticipants;
  let round = model.data.ongoingTournament.currentRound;
  let app = document.getElementById("app");
  let html = "";
  html += /*html*/ `
  <h3 class="rnd-title">
    ${model.data.ongoingTournament.tournamentName}
  </h3>

  <div class="rnd-num">
    Runde ${model.data.ongoingTournament.currentRound}
  </div>
  <br>
  <div>
    ${round === 1 ? getPlayersAndByes(participants.length) : newBasicTournament()}  
  </div>
  <br>
  <button onclick="nextRound()">
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
  let ongoing = model.data.ongoingTournament;
  let currentParticipants = ongoing.currentRoundParticipants;
  let scoreInputs = model.inputs.ongoingTournament.score;
  let matchNum = currentParticipants.length / 2;
  let roundArray = [];
  let matchHtml = "";
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
        { playerId: currentParticipants[i], matchScore: null },
        { playerId: currentParticipants[i + 1], matchScore: null },
      ]);
      roundArray.push(matchArray);
    }
  }

  for (let i = 0; i < roundArray.length; i++) {
    matchHtml += `<div class="bracket-list">`; // start på en ramme rundt hver kamp.
    for (let j = 0; j < roundArray[i].length; j++) {
      matchHtml += /*HTML*/ `
      <div class="rnd-mtch">
        <div class="tm-name">
          ${roundArray[i][j]}
        </div>
        <div class="tm-score">
          <input required="true" max=10 min=0 class="score-input" type="number" maxlength="2" onchange="model.inputs.ongoingTournament.score[${i}][${j}].matchScore = parseInt(this.value)">
        </div>
      </div>  
      `;
    }
    matchHtml += /*HTML*/`</div>
    <br>`; //  stopp på ramme.
  }

  waiting = model.data.ongoingTournament.waitingParticipants;
  let waitList = waiting.map( person =>
    `<div style="padding: 5px;">${person}</div>`
  )
  console.log(waiting)

  matchHtml += `
  ${waiting[0] ? `<div style="margin-top: 20px;" >Venteliste:</div>
  <div style="background: gray; border: 2px solid black;">
    ${waitList.join("")}
  </div>` : ""}`
  return matchHtml;
}
