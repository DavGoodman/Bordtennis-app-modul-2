function nextRound() {
  let ongoing = model.data.ongoingTournament;
  let score = model.inputs.ongoingTournament.score;
  let rounds = ongoing.rounds;
  let newRoundWinners = [];


  // finding winners from the previous round
  for (let i = 0; i < score.length; i++) {

    if ((score[i][0].matchScore < 0 || score[i][1].matchScore < 0) ||
      (score[i][0].matchScore > 10 || score[i][1].matchScore > 10)) {
      alert('Score må være mellom 0 og 10')
      return
    }
    if (score[i][0].matchScore == 10 && score[i][1].matchScore == 10) {
      alert('to kan ikke ha 10 i samme match')
      return
    }
    if (score[i][0].matchScore !== 10 && score[i][1].matchScore !== 10) {
      alert('må ha vinner')
      return
    }
  }

  let winners = score.map((item) => item.filter(match => match.matchScore == 10))

  let actualWinners = winners.map(player => player.map(item => item.playerId))


  actualWinners = actualWinners.flat()

  // adding played round to data.ongoing.
  let newRoundObject = {
    participants: score,
    round: ongoing.currentRound,
  };
  score = [];
  rounds.push(newRoundObject);

  // preparing data for next round. new function?
  ongoing.currentRoundParticipants = actualWinners;
  ongoing.currentRound++;

  // starting the next round.
  if (actualWinners.length < 2) {
    console.log(model.data.ongoingTournament);
    console.log(actualWinners[0], " is the winner!");
    winnerView(actualWinners); // template view bare
    finishTournament();
    console.log(model.data.tournaments);
    return;
  }
  tRound(); // updates model.app.view to "round-n + 1"
  ongoingTournamentView();
}

function finishTournament() {

  let allUsers = model.data.users
  let participants = model.data.ongoingTournament.participants; // brukernavn
  let winner = model.data.ongoingTournament.currentRoundParticipants; // brukernavn
  const playerIds = participants.map(username => getUserId(username));
  const winnerId = getUserId(winner[0]);

  let tObject = {
    tournamentId: model.data.tournaments.length,
    datePlayed: new Date().toISOString(),
    tournamentName: model.data.ongoingTournament.tournamentName,
    players: playerIds,
    matches: model.data.ongoingTournament.rounds,
    winnerId: winnerId,
  }

  model.data.tournaments.push(tObject)
  console.table(model.data.tournaments)
  console.log(model.data.tournaments[model.data.tournaments.length - 1].matches)

  resetTournament();
}

function getUserId(username) {
  const user = model.data.users.filter(item => item.userName === username)
  return user[0].id
}


function resetTournament() {
  model.data.ongoingTournament.currentRoundParticipants = []
  model.data.ongoingTournament.participants = [];
  model.data.ongoingTournament.rounds = [];
  model.data.ongoingTournament.tournamentName = "";
  model.data.ongoingTournament.currentRound = null
  model.inputs.ongoingTournament.score = [];
}
