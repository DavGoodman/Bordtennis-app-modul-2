
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

function startMatch() { }
