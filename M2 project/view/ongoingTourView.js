
function ongoingTournamentView() {
  model.inputs.ongoingTournament.score = [];
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
    ${checkBaseBracket() ? newBasicTournament() : getWeirdTournamentNumbers()}  
  </div>
  <br>
  <button onclick="nextRound()">
    Neste Runde
  </button>
  `;
  app.innerHTML = html;
}

function checkBaseBracket() {
  let base = [2, 4, 8, 16, 32, 64, 128];
  let n = model.data.ongoingTournament.participants.length;
  return base.includes(n);
}

function tRound() {
  // for å oppdatere view.
  model.app.view = "round-" + model.data.ongoingTournament.currentRound;
}

function newBasicTournament() {
  let ongoing = model.data.ongoingTournament;
  let currentParticipants = ongoing.currentRoundParticipants;
  let tempList = ongoing.currentRoundMatchups;
  let scoreInputs = model.inputs.ongoingTournament.score;
  let matchNum = currentParticipants.length / 2;
  let roundArray = [];
  let matchHtml = "";

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
      matchHtml += /*HTML*/`
      <div class="rnd-mtch">
        <div class="tm-name">
          ${roundArray[i][j]}
        </div>
        <div class="tm-score">
          <input required="true" max=10 min=0 class="score-input" type="number" maxlength="2" onchange="model.inputs.ongoingTournament.score[${i}][${j}].matchScore = parseInt(this.value)"><button onclick="alert('Er dette virkelig ${roundArray[i][j]}?'); console.log(model.inputs.ongoingTournament.score[${i}][${j}]);">Save</button>
        </div>
      </div>  
      `;
    }
    matchHtml += `</div><br>`; //  stopp på ramme.
  }
  tempList = roundArray;
  return matchHtml;
}


//____________________________________________________________________________________________________



function getWeirdTournamentNumbers() {
  let baseN = [128, 64, 32, 16, 8, 4];
  let n = model.data.ongoingTournament.participants.length;
  let diff;
  let goldenN;

  for (let i = 0; i < baseN.length; i++) {
    if (n < baseN[i] && n > baseN[i + 1]) {
      diff = n - baseN[i + 1];
      goldenN = baseN[i + 1];
      break;
    }
  }
  console.log("Woopsie, weird bracket! ", "Byes= ", diff, "Closest golden number = ", goldenN);
  makeByersBracket(diff, goldenN);
}

// function checkByes() {
//   let byer = model.inputs.ongoingTournament.byer;
//   let editableArray = participants;
//   if (editableArray.length % 2 != 0) {
//     byer = editableArray.pop();
//   }

//   console.log(byer);
//   console.log(editableArray);
//   matchDivide(editableArray);
// }

// function matchDivide(array) {
//   // let divideInto = array.length / 2;
//   let currentRoundMatches = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 == 0) {
//     }
//   }
// }

function generateRound(array) {
  if (array.length % 2 != 0) {
    let matchup = [{ playerId: "", matchScore: 0 }, {}];
    for (let i = 0; i < array.length - 1; i + 2) {
      match = array[i] + array[i + 1];
    }
    buy = array[array.length - 1];
  }
  for (let i = 0; i < array.length; i + 2) {
    match[i] = array[i] + array[i + 1];
  }
}

function winnerView(name) {
  document.getElementById(
    "app"
  ).innerHTML = `
  <h1>
    ${name} vant ${model.data.ongoingTournament.tournamentName}-turneringen! Den gærningen...
  </h1>
  <button onclick="menuView()" class="btn filled">Tilbake</button>`;
}
