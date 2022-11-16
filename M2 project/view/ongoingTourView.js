let participants = ["Robhimself", "dankert", "Newbie", "Gjesten", "developer"];
ongoingTournamentView();
function ongoingTournamentView() {
  let app = document.getElementById("app");
  let html = "";

  html += `
    <div style="border: 2px solid black">Startskudd</div>
    `;

  app.innerHTML = html;
}

function checkBaseBracket(n) {
  let base = [4, 8, 16, 32, 64, 128];
  if (base.includes(n)) {
  }
}

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
//     if (n % 2 != 0){
//       n++;
//     }
//     count = findRounds(n / 2);
//     count.unshift(n);
//     console.log("antall kamper ", count.length);
//     return count;
//   }
// }
