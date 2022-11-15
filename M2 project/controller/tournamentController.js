function addPlayer(name) {
  let participants = model.inputs.newTournament.participants;
  let users = model.data.users;

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
  model.data.ongoingTournament.tournamentName = model.inputs.newTournament.tournamentName;
  let participants = model.inputs.newTournament.participants;

  model.data.ongoingTournament.participants = shuffle(participants);

  //   model.inputs.newTournament.tournamentName = "";
  //   model.inputs.newTournament.participants = [];

  console.log(model.data.ongoingTournament);
  console.log(model.inputs.newTournament.tournamentName);
  console.log(model.inputs.newTournament.participants);
}

function shuffle(array) {
  const shuffledArray = [...array];
  console.log("Before shuffle: ", shuffledArray);

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  return shuffledArray;
}
