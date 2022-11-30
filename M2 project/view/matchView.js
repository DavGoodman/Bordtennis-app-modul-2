// matchView();
function matchView() {
  const invited = model.inputs.newMatch.invitedPlayer;
  let view = model.app.view;

  let html = document.getElementById("app");
  let player = invited.map((user) => `<div class="opponentText"><span>${user}</span></div>`);

  html.innerHTML = "";
  html.innerHTML = /*HTML*/ `
      
  <div class="logo-container" ">
  <svg width="155" height="97" viewBox="0 0 155 97" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M78.4396 67.1264C78.2888 66.5116 78.051 65.9722 77.7262 65.5082C77.4014 65.0326 76.9954 64.6323 76.5082 64.3075C76.0326 63.9711 75.4757 63.7217 74.8377 63.5593C74.2113 63.3853 73.5211 63.2983 72.767 63.2983C71.143 63.2983 69.7567 63.6869 68.6083 64.4641C67.4715 65.2414 66.6014 66.3608 65.9982 67.8224C65.4066 69.2841 65.1108 71.0473 65.1108 73.1122C65.1108 75.2003 65.395 76.9867 65.9634 78.4716C66.5318 79.9564 67.3787 81.0933 68.5039 81.8821C69.6291 82.6709 71.027 83.0653 72.6974 83.0653C74.1707 83.0653 75.3945 82.8507 76.369 82.4215C77.355 81.9923 78.0916 81.3833 78.5788 80.5945C79.0661 79.8056 79.3097 78.8776 79.3097 77.8104L80.9801 77.9844H72.8366V71.0938H88.6364V76.0355C88.6364 79.2836 87.9461 82.0619 86.5657 84.3704C85.1969 86.6673 83.306 88.4305 80.8931 89.6602C78.4918 90.8782 75.7367 91.4872 72.6278 91.4872C69.1593 91.4872 66.1142 90.7506 63.4925 89.2773C60.8709 87.8041 58.8234 85.7044 57.3501 82.9783C55.8885 80.2522 55.1577 77.0099 55.1577 73.2514C55.1577 70.3049 55.6043 67.6948 56.4975 65.4212C57.4023 63.1475 58.6552 61.2276 60.256 59.6616C61.8569 58.0839 63.7072 56.8949 65.8068 56.0945C67.9065 55.2824 70.157 54.8764 72.5582 54.8764C74.6695 54.8764 76.63 55.178 78.4396 55.7812C80.2609 56.3729 81.8675 57.2197 83.2596 58.3217C84.6632 59.4122 85.7943 60.7056 86.6527 62.2021C87.5111 63.6985 88.0331 65.34 88.2188 67.1264H78.4396ZM93.1475 91V55.3636H118.831V63.1591H102.822V69.2841H117.508V77.0795H102.822V83.2045H118.761V91H93.1475ZM122.654 63.1591V55.3636H153.627V63.1591H142.909V91H133.373V63.1591H122.654Z" fill="#EE7100"/>
  <path d="M72.6093 50.2677C63.8652 50.2677 56.2729 55.294 52.6077 62.6241L12.0286 22.0469L12.1333 21.9422L22.6228 11.4532C37.8945 -3.81774 62.6434 -3.81774 77.9151 11.4532C89.6263 23.1639 92.3491 40.4768 86.0833 54.7879C82.3483 51.9431 77.6708 50.2677 72.6093 50.2677ZM8.60771 26.5148L50.6355 68.5405C50.3911 69.8494 50.269 71.2107 50.269 72.6069C50.269 76.6559 51.3511 80.4431 53.2186 83.7242C52.695 83.7591 52.1539 83.7765 51.6129 83.7765H51.1416C45.2249 83.7765 39.5351 81.4204 35.3463 77.2318L33.6359 75.5215C31.3495 73.2352 27.597 73.3574 25.4677 75.8182L15.3971 87.4416C14.3848 88.6109 12.9187 89.309 11.3828 89.3614C9.8469 89.4137 8.32846 88.8203 7.2289 87.7208L1.64381 82.136C0.544249 81.0365 -0.0491667 79.5356 0.00319343 77.9998C0.0555536 76.4639 0.753689 74.9979 1.92307 73.9857L13.547 63.9156C15.9905 61.7863 16.1301 58.034 13.8437 55.7478L12.1333 54.0374C7.94449 49.8314 5.58828 44.1418 5.58828 38.2254V37.7542C5.58828 33.775 6.65293 29.918 8.60771 26.5322V26.5148Z" fill="#072D35"/>
  </svg>
  </div> 
        ${
          view === "match-started"
            ? /*HTML*/ `
                  <div class="match-player">
                    <div>
                      ${model.app.user}
                    </div>
                    <button onclick="minusOne(0); matchView();" class="match-btn">-</button>
                    <input type="number"
                    id="my-input"
                    min="0"
                    max="10"
                    value="${model.inputs.newMatch.score[0]}"
                    step="1" placeholder="0" class="scoreinput" oninput="model.inputs.newMatch.score[0] = parseInt(this.value)" />
                    <button onclick="plusOne(0); matchView();" class="match-btn">+</button>
                  </div>

                  <div class="match-player" style="margin-top: 15px;">
                    <div>
                      ${invited}
                      </div>
                      <button onclick="minusOne(1); matchView();" class="match-btn">-</button>
                      <input type="number"
                      id="my-input"
                      min="0"
                      max="10"
                      value="${model.inputs.newMatch.score[1]}"
                      step="1" placeholder="0" class="scoreinput" oninput="model.inputs.newMatch.score[1] = parseInt(this.value)" />
                      <button onclick="plusOne(1); matchView();" class="match-btn">+</button>
                    </div>
                    <div class="button-container" style="height: 20vh">
                    <button class="btn filled" onclick="completeMatch()">fullfør</button>
                    <button class="btn" onclick="model.app.view = 'match-create'; matchView();">tilbake</button>
                    </div>
                `
            : /*HTML*/ `
                  <input list="players" name="player" type="text" placeholder="legg til spiller" onchange="addMatchPlayer(this.value)">     
                  <datalist class="datalist" id="players">
                      ${showUser()}
                  </datalist>
        
                <div style="font-size: 1.5rem; display: flex; justify-content: space-around; width: 70%; margin-top: 15px;">
                  <div>${player.length === 0 ? "" : "vs "}</div>
                  <div>${player.join("")}</div>
                </div>
                <div class="button-container" style="height: 20vh">
                <button class="btn filled" onclick="newMatch()">start</button>
                <button class="btn" onclick="model.inputs.newMatch.invitedPlayer = []; menuView();">tilbake</button>
                </div>
                `
        }
      `;
}

function newMatch() {
  if (model.inputs.newMatch.invitedPlayer.length === 1) {
    let now = new Date();
    model.inputs.newMatch.timeStarted = now.toISOString();
    model.app.view = "match-started";
    matchView();
  } else {
    alert("Velg en motstander!");
  }
}

function showUser() {
  let users = model.data.users;
  let playerList = "";

  for (let i = 0; i < users.length; i++) {
    if (model.inputs.newMatch.invitedPlayer.includes(users[i].userName)) {
      continue;
    }
    if (model.app.user != users[i].userName) {
      playerList += `<option value="${users[i].userName}">${users[i].userName}</option>`;
    }
  }
  return playerList;
}

function checkTime(timeWindow) {
  let matches = model.data.matches;
  let daysInMs = timeWindow * 60 * 60 * 24 * 1000;
  let dateToday = new Date();

  for (let i = 0; i < matches.length; i++) {
    let previousDate = new Date(matches[i].datePlayed);
    let timeSinceMatch = dateToday.getTime() - previousDate.getTime();
    if (timeSinceMatch < daysInMs) {
    }
  }
}

function test(timeWindow) {
  let daysInMs = timeWindow * 60 * 60 * 24 * 1000;
  let now = new Date().getTime();
  let test = model.data.matches.filter((match) => now - new Date(match.datePlayed).getTime() < daysInMs);
}

function plusOne(index) {
  if (model.inputs.newMatch.score[index] < 10) {
    model.inputs.newMatch.score[index]++;
  }
}

function minusOne(index) {
  if (model.inputs.newMatch.score[index] > 0) {
    model.inputs.newMatch.score[index]--;
  }
}
