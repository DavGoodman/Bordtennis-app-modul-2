function nextRound() {
  let ongoing = model.data.ongoingTournament;
  let score = model.inputs.ongoingTournament.score;
  let rounds = ongoing.rounds;
  let newRoundWinners = [];

  // finding winners from the previous round
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score[i].length; j++) {
      if (score[i][j].matchScore == 10) {
        newRoundWinners.push(score[i][j].playerId);
      }
    }
  }

  // adding played round to data.ongoing.
  let newRoundObject = {
    roundNumber: ongoing.currentRound,
    roundMatches: score,
    roundWinners: newRoundWinners,
  };
  score = [];
  rounds.push(newRoundObject);

  // preparing data for next round. new function?
  ongoing.currentRoundParticipants = newRoundWinners;
  ongoing.currentRound++;

  // starting the next round.
  if (newRoundWinners.length < 2) {
    console.log(model.data.ongoingTournament);
    console.log(newRoundWinners, " is the winner!");
    winnerView(newRoundWinners);
    // finalizeTournament();
    return;
  }
  tRound(); // updates model.app.view to "round-n + 1"
  ongoingTournamentView();
}
