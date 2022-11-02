//match

//matchView();
function matchView() {
    let html = document.getElementById("app");
    let player = model.inputs.newMatch.invitedPlayer.map(user => `<div style="display: flex; justify-content: space-between; padding: 1rem"><span>${user}</span><button>Hei</button></div>`)

    html.innerHTML = "";
    html.innerHTML = `
    <div class="container " style="padding-top: 13vh; padding-bottom: 2vh;">
        <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
    </div>
    <div class="container ">
        <div class="inputField">
            <input list="players" name="player" type="text" placeholder="legg til spiller" onchange="addPlayer(this.value)">
                    <div class="player-list" style="display: flex; flex-direction: column;">
                    ${player}
                    </div>
                    <datalist id="players">
                        ${showUser()}
                    </datalist>
        </div>
    </div>



    <div class="container " style="padding-bottom: 14vh;">
        <div class="listcontainer container">
            <p>VS</p>
            <br>
            <p style="font-weight: 900; font-size: xx-large;">yourEnemyGoesHere</p>
        </div>
    </div>
    <div class="buttoncontainer">
        <div class="btn filled" onclick="startMatch(); newMatch();">start</div>
        <div class="btn" onclick"menuView()">tilbake</div>
    </div>
  `;
}

<<<<<<< Updated upstream
// newMatch();
=======
function showUser() {
    let users = model.data.users;
    let playerList = '';

    for (let i = 0; i < users.length; i++) {
        if (model.inputs.newMatch.invitedPlayer.includes(users[i].userName)) { continue }
        playerList = `<option value="${users[i].userName}">${users[i].userName}</option>`
    }
    console.log(playerList)
    return playerList;
}


function addMatchPlayer(name) {
    let matchPlayer = model.inputs.newMatch.invitedPlayer;
    matchPlayer.push(name);
    console.log(matchPlayer);
    tournamentView();
}

function deleteMatchPlayer(name) {
    let matchPlayer = model.inputs.newMatch.invitedPlayer;
    let deleted = matchPlayer.indexOf(name);
    matchPlayer.splice(deleted, 1);
    tournamentView();
}























newMatch();
>>>>>>> Stashed changes
function newMatch() {
    let html = document.getElementById("app");
    html.innerHTML = "";
    html.innerHTML = `
    <div class="container " style="padding-top: 13vh; padding-bottom: 2vh;">
        <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
    </div>  
    <div style="padding-bottom: 15vh;"></div>
    <div class="matchcontainer">
        <div class="gamescore">
            <div style="grid-area: myMatchName;">David</div>
            <div style="grid-area: otherMatchName;">Robert</div>
        </div>
        
        
        <div class="gamescore">
            <div style="grid-area: scoreText">Score:</div>
            <input class="scoreinput" style="grid-area: myScoreBox;"></input>
            <input class="scoreinput" style="grid-area: otherScoreBox;"></input>
        </div>
        
    </div>
    <div class="buttoncontainer">
        <div class="btn filled" onclick="completeMatch()" value="this.value">fullfør</div>
        <div class="btn" onclick="matchView();">tilbake</div>
    </div>
  `;
}

function completeMatch() { }
