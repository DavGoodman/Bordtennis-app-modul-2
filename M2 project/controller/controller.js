function addPlayer(name) {
  let participants = model.inputs.newTournament.participants;
  participants.push(name);
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

//   function deletePlayer2(user) {
//     console.log("Check" + user);
//     let participants = model.inputs.newTournament.participants;
//     let index = participants.indexOf(user);
//     console.log("check user " + user);
//     console.log("check index " + index);
//     const newList = participants.filter((index) => participants.splice(index, 1));
//     console.log(newList);
//     tournamentView();
//   }

function addMatchPlayer(name) {
  let matchPlayer = model.inputs.newMatch.invitedPlayer;
  if (matchPlayer.length === 0) {
    matchPlayer.push(name);
  } else {
    matchPlayer.splice(0, 1, name);
  }
  console.log(matchPlayer);
  matchView();
}

function deleteMatchPlayer(name) {
  model.inputs.newMatch.invitedPlayer = [];
  matchView();
}

function startMatch() {}
