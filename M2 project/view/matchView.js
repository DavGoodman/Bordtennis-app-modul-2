//match

//matchView();
function matchView() {
  let html = document.getElementById("app");
  html.innerHTML = "";
  html.innerHTML = `
    <div class="container " style="padding-top: 13vh; padding-bottom: 2vh;">
        <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
    </div>
    <div class="container ">
        <div class="inputField">
            <input class="textField" placeholder="legg til"></input>
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

newMatch();
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

function completeMatch() {}
