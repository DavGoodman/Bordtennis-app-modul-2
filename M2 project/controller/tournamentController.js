function addPlayer(name) {
  let participants = model.inputs.newTournament.participants;
  let users = model.data.users;

  if (name.includes("'")) {
    alert("ulovlig karakter brukt");
    return;
  } else if (name.length < 3) {
    alert("spiller må ha minst 3 bokstaver");
    return;
  } else if (participants.includes(name) || participants.includes(name + "(gjest)")) {
    alert("spilleren er allerede lagt til");
    return;
  }

  for (let user of users) {
    if (user.userName === name) {
      participants.push(name);
      tournamentView();
      return;
    }
  }
  participants.push(name + "(gjest)");

  tournamentView();
}

function deletePlayer(name) {
  let participants = model.inputs.newTournament.participants;
  for (let i = 0; i < participants.length; i++) {
    if (participants[i] === name) {
      participants.splice(i, 1);
    }
  }
  console.log(participants);
  tournamentView();
}

function commitPlayers() {
  // Deltagere må være > 3 for å lage turnering
  let participants = model.inputs.newTournament.participants;
  let name = model.inputs.newTournament.tournamentName;

  if (participants.length < 4) {
    alert("må ha minst 4 spillere for turnering");
    return;
  } else if (name.length < 2) {
    alert("turneringsnavn må bli minst 2 karakter lang");
    return;
  }

  model.data.ongoingTournament.tournamentName = name;
  model.data.ongoingTournament.participants = shuffle(participants);

  model.inputs.newTournament.tournamentName = "";
  model.inputs.newTournament.participants = [];

  console.log(model.data.ongoingTournament);

  // makeBracket();
}

function shuffle(array) {
  const shuffledArray = array;
  console.log("Before shuffle: ", shuffledArray);

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  return shuffledArray;
}
