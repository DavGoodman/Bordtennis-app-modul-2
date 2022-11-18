let participantsFive = ["Robhimself", "dankert", "Newbie", "Gjesten", "developer"]; // testarray for "ikke-gode" antall deltakere
// let participantsFour = ["Robhimself", "dankert", "Newbie", "developer"]; // testarray for "gode" antall deltakere
// model.data.ongoingTournament.tournamentName = "TorsdagsTourny m/ Terje!"; //  sample for view
model.app.view = "round-1";

//  alt over burde være satt når man lager turnering i tournamentView()

ongoingTournamentView();
function ongoingTournamentView() {
  let app = document.getElementById("app");
  let html = "";
  html += /*html*/ `
  <h3 class="rnd-title">
    ${model.data.ongoingTournament.tournamentName}
  </h3>

  <div class="rnd-num">
    Runde ${tRound()}
  </div>
  <br>
  <div>
    ${checkBaseBracket() ? newBasicTournament() : getWeirdTournamentNumbers()}  
  </div>
  <br>
  <button onclick="">
    Neste Runde
  </button>
  `;
  app.innerHTML = html;
}

function checkBaseBracket() {
  let base = [4, 8, 16, 32, 64, 128];
  let n = model.data.ongoingTournament.participants;

  return base.includes(n);
}

function tRound() {
  let str = model.app.view;
  return str.charAt(str.length - 1);
}

function newBasicTournament() {
  let list = model.data.ongoingTournament.participants;
  let matchNum = list.length / 2;
  let roundArray = [];
  let matchHtml = "";

  if (roundArray.length < matchNum) {
    for (let i = 0; i < list.length; i = i + 2) {
      let matchArray = [];
      matchArray.push(list[i]);
      matchArray.push(list[i + 1]);
      roundArray.push(matchArray);
    }
  }
  for (let i = 0; i < roundArray.length; i++) {
    matchHtml += `<div class="bracket-list">`; // start på en ramme rundt hver kamp.
    for (let j = 0; j < roundArray[i].length; j++) {
      matchHtml += `
      <div class="rnd-mtch">
        <div class="tm-name">
          ${roundArray[i][j]}
        </div>

        <div class="tm-score">
          <input class="score-input" type="number" maxlength="2" onchange=""><button onclick="alert('Er dette virkelig ${roundArray[i][j]}?')">Save</button>
        </div>
      </div>  
      `;
    }
    matchHtml += `</div><br>`; //  stopp på ramme.
  }

  return matchHtml;
}

function getWeirdTournamentNumbers() {
  let baseN = [128, 64, 32, 16, 8, 4];
  let p = participantsFive.length;
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

function makeByersBracket(byers, closestToBase) {}

// deltakere allerede stokket
function listMatchups() {}

function checkByes() {
  let byer = model.inputs.ongoingTournament.byer;
  let editableArray = participants;
  if (editableArray.length % 2 != 0) {
    byer = editableArray.pop();
  }

  console.log(byer);
  console.log(editableArray);
  matchDivide(editableArray);
}

function matchDivide(array) {
  // let divideInto = array.length / 2;
  let currentRoundMatches = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
    }
  }
}
/*

    newTournament: {
      tournamentName: "",
      participants: [],
    },

    ongoingTournament: {
      score: [],
    },

*/

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

//  model.data.ongoingTournament.rounds[0].

// let fakeParticipents = ["Robhimself", "dankert", "Newbie", "Gjesten", "Robhimself", "dankert", "Newbie", "Gjesten"];

// findRounds(4); // 2 (4, 2, vinner)
// findRounds(6); // 3 (6, 3+1, 2, vinner)
// findRounds(8); // 3 (8, 4, 2, vinner)
// findRounds(9); // x (8+1, 4+1, 2+1, 1+1, vinner)
// findRounds(14); // 4 (14, 7+1, 4, 2, vinner)
// findRounds(33); // x (33, 16+1, 8+1, 4+1, 2+1 , 1+1, vinner?)
// function findRounds(n) {
//   let count;
//   if (n / 2 < 1) {
//     return [];
//   } else {
//     if (n % 2 != 0) {
//       n++;
//     }
//     count = findRounds(n / 2);
//     count.unshift(n);
//     console.log("antall kamper ", count.length);
//     return count;
//   }
// }
