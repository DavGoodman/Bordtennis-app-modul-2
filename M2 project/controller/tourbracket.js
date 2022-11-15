let participants = ["dankert", "Robhimself", "developer", "HeisenBerg", "Frank", "Guest1", "Guest2", "Newbie"];

shuffle(participants);
function shuffle(array) {
  const shuffledArray = [...array];
  console.log("Before shuffle: ", shuffledArray);

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  console.log("After shuffle: ", shuffledArray);
  //   return shuffledArray;
}

function createBracket() {}

shuffle2(participants);

function shuffle2(array) {
  let newArray = array;
  let m = newArray.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = newArray[m];
    newArray[m] = newArray[i];
    newArray[i] = t;
  }
  return newArray;
}

console.log("Fisher-Yates: OG", participants);
console.log("Fisher-Yates: After", shuffle2(participants));

// Alle kampene i Runde 1 i viewet: 4 kamper.

//  setter inn score i alle 4 kampene.
//  Når man trykker neste runde:pushe alle kamp-objekt inn i nytt array - [  {kamp1(playerID og score)},{kamp2(playerID og score)},{kamp3(playerID og score)},{kamp4(playerID og score)} ]
//  Deretter pusher dette arrayet inn i inputs.ongoing.round til data
