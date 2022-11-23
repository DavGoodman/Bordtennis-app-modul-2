let participants = [];
let input = [];
let byelist = [];
let arr = [];
let firstRound = [];
let secondRound = [];

view();
function view() {
  let html = document.getElementById("app");

  html.innerHTML = "";
  html.innerHTML = /*HTML*/ `
  <br>
  <form onsubmit="addParts(people.value)">
  <label for="people">Velg antall deltakere:</label>
  <select id="people" name="amount">
  <option value="3">3</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  </select>
    <input type="submit" value="Velg">
    </form>
    <h2>Participants: ${participants.length}</h2>
    <div class="list">${pList()}</div>
    <div class="test-container">
    ${participants.length < 3 ? "Add players first!" : newBracket()}
    </div>
    `;
}

function addParts(n) {
  participants = [];
  for (let i = 0; i < n; i++) {
    participants.push(`Player-${i + 1}`);
  }
  view();
}

function pList() {
  let list = "";
  for (let i = 0; i < participants.length; i++) {
    list += `<div>${participants[i]}</div>`;
  }
  return list;
}

function newBracket() {
  let num = participants.length;
  let base = [128, 64, 32, 16, 8, 4, 2];
  let byes, numbersUp, closestDown;

  for (let i = 0; i < base.length; i++) {
    if (num < base[i] && num > base[i + 1]) {
      byes = num - base[i + 1];
      closestDown = base[i + 1];
      numbersUp = base[i] - num;
    }
  }
  console.log("Byes: ", byes, ". closestDown: ", closestDown, ". numbersUp: ", numbersUp);

  arr = participants;

  byelist = arr.splice(0, numbersUp);
  for (let i = 0; i < byes * 2; i++) {
    firstRound.push(arr[i]);
  }

  for (let i = 0; i < numbersUp; i++) {
    secondRound.push(byelist[i]);
  }

  let firstBox;
  let secondBox = "<br>";

  // 3
  if (byes == 1 && numbersUp == 1) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
  }

  // 5
  if (byes == 1 && numbersUp == 3) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[1]} vs ${secondRound[2]}</div>`;
  }

  // 6
  if (byes == 2 && numbersUp == 2) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;
    firstBox += `<div class="box">${firstRound[2]} vs ${firstRound[3]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[1]} vs "TBD"</div>`;
  }

  // 7
  if (byes == 3 && numbersUp == 1) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;
    firstBox += `<div class="box">${firstRound[2]} vs ${firstRound[3]}</div>`;
    firstBox += `<div class="box">${firstRound[4]} vs ${firstRound[5]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
  }

  // 9
  if (byes == 1 && numbersUp == 7) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[1]} vs ${secondRound[2]}</div>`;
    secondBox += `<div class="box">${secondRound[3]} vs ${secondRound[4]}</div>`;
    secondBox += `<div class="box">${secondRound[5]} vs ${secondRound[6]}</div>`;
  }

  // 10
  if (byes == 2 && numbersUp == 6) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;
    firstBox += `<div class="box">${firstRound[2]} vs ${firstRound[3]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[1]} vs ${secondRound[2]}</div>`;
    secondBox += `<div class="box">${secondRound[3]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[4]} vs ${secondRound[5]}</div>`;
  }

  // 11
  if (byes == 3 && numbersUp == 5) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;
    firstBox += `<div class="box">${firstRound[2]} vs ${firstRound[3]}</div>`;
    firstBox += `<div class="box">${firstRound[4]} vs ${firstRound[5]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[1]} vs ${secondRound[2]}</div>`;
    secondBox += `<div class="box">${secondRound[3]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[4]} vs "TBD"</div>`;
  }

  // 12
  if (byes == 4 && numbersUp == 4) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;
    firstBox += `<div class="box">${firstRound[2]} vs ${firstRound[3]}</div>`;
    firstBox += `<div class="box">${firstRound[4]} vs ${firstRound[5]}</div>`;
    firstBox += `<div class="box">${firstRound[6]} vs ${firstRound[7]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[1]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[2]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[3]} vs "TBD"</div>`;
  }

  // 13
  if (byes == 5 && numbersUp == 3) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;
    firstBox += `<div class="box">${firstRound[2]} vs ${firstRound[3]}</div>`;
    firstBox += `<div class="box">${firstRound[4]} vs ${firstRound[5]}</div>`;
    firstBox += `<div class="box">${firstRound[6]} vs ${firstRound[7]}</div>`;
    firstBox += `<div class="box">${firstRound[8]} vs ${firstRound[9]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
    secondBox += `<div class="box">"TBD" vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[1]} vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[2]} vs "TBD"</div>`;
  }

  // 14
  if (byes == 6 && numbersUp == 2) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;
    firstBox += `<div class="box">${firstRound[2]} vs ${firstRound[3]}</div>`;
    firstBox += `<div class="box">${firstRound[4]} vs ${firstRound[5]}</div>`;
    firstBox += `<div class="box">${firstRound[6]} vs ${firstRound[7]}</div>`;
    firstBox += `<div class="box">${firstRound[8]} vs ${firstRound[9]}</div>`;
    firstBox += `<div class="box">${firstRound[10]} vs ${firstRound[11]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
    secondBox += `<div class="box">"TBD" vs "TBD"</div>`;
    secondBox += `<div class="box">${secondRound[1]} vs "TBD"</div>`;
    secondBox += `<div class="box">"TBD" vs "TBD"</div>`;
  }

  // 15
  if (byes == 7 && numbersUp == 1) {
    firstBox += `<div class="box">${firstRound[0]} vs ${firstRound[1]}</div>`;
    firstBox += `<div class="box">${firstRound[2]} vs ${firstRound[3]}</div>`;
    firstBox += `<div class="box">${firstRound[4]} vs ${firstRound[5]}</div>`;
    firstBox += `<div class="box">${firstRound[6]} vs ${firstRound[7]}</div>`;
    firstBox += `<div class="box">${firstRound[8]} vs ${firstRound[9]}</div>`;
    firstBox += `<div class="box">${firstRound[10]} vs ${firstRound[11]}</div>`;
    firstBox += `<div class="box">${firstRound[12]} vs ${firstRound[13]}</div>`;

    secondBox += `<div class="box">${secondRound[0]} vs "TBD"</div>`;
  }

  // console.log("Arr: ", arr);
  // console.log("FirstRound: ", firstRound);
  // console.log("SecondRound: ", secondRound);
  view();
  return `<div class="first">${firstBox}</div>` + `<div class="second">${secondBox}</div>`;
}

// shuffle(participants);
// function shuffle(array) {
//   const shuffledArray = [...array];
//   console.log("Before shuffle: ", shuffledArray);

//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * i);
//     const temp = shuffledArray[i];
//     shuffledArray[i] = shuffledArray[j];
//     shuffledArray[j] = temp;
//   }
//   console.log("After shuffle: ", shuffledArray);
//   //   return shuffledArray;
// }

// function createBracket() {}

// shuffle2(participants);

// function shuffle2(array) {
//   let newArray = array;
//   let m = newArray.length,
//     t,
//     i;

//   while (m) {
//     i = Math.floor(Math.random() * m--);
//     t = newArray[m];
//     newArray[m] = newArray[i];
//     newArray[i] = t;
//   }
//   return newArray;
// }

// console.log("Fisher-Yates: OG", participants);
// console.log("Fisher-Yates: After", shuffle2(participants));

// // Alle kampene i Runde 1 i viewet: 4 kamper.

// //  setter inn score i alle 4 kampene.
// //  Når man trykker neste runde:pushe alle kamp-objekt inn i nytt array - [  {kamp1(playerID og score)},{kamp2(playerID og score)},{kamp3(playerID og score)},{kamp4(playerID og score)} ]
// //  Deretter pusher dette arrayet inn i inputs.ongoing.round til data
