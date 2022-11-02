function addPlayer(name) {
    let participants = model.inputs.newTournament.participants;
    participants.push(name);
    console.log("add function +" + participants);
    tournamentView();
}

// function deletePlayer(name) {
//     let participants = model.inputs.newTournament.participants;
//     let deleted = participants.indexOf(name);
//     participants.splice(deleted, 1);
//     tournamentView();
// }