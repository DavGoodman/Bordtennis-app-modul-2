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

function commmitPlayers() {
    model.data.ongoingTournament.participants = model.inputs.newTournament.participants;
}