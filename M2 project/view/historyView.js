// historyView();

function historyView() {
  model.app.view = "history";
  let currentUser = getLoggedInUserId();
  let app = document.getElementById("app");
  let currentEvent = model.inputs.history.showEvent;
  let showAll = model.inputs.history.showAll;

  const recentMatches = listAllEvents(currentUser)
    .splice(0, 5)
    .map((item, index) =>
      Object.hasOwn(item, "matchId")
        ? `
    <tr onclick="getEvent(${index})">
      <td>vs ${getOpponent(item)}</td>
      <td>${getMatchWinner(item.participants)}</td> 
      <td>${convertTime(item.datePlayed)}</td>
    </tr>
    `
        : `
      <tr onclick="getEvent(${index})">
        <td>${item.tournamentName}</td>
        <td>${getUserName(item.winnerId)}</td>
        <td>${convertTime(item.datePlayed)}</td>
      </tr>
    `
    );

  const allMatches = listAllEvents(currentUser).map((item, index) =>
    Object.hasOwn(item, "matchId")
      ? `
      <tr onclick="getEvent(${index})">
        <td>vs ${getOpponent(item)}</td>
        <td>${getMatchWinner(item.participants)}</td>
        <td>${convertTime(item.datePlayed)}</td>
      </tr>
      `
      : `
        <tr onclick="getEvent(${index})">
          <td>${item.tournamentName}</td>
          <td>${getUserName(item.winnerId)}</td>
          <td>${convertTime(item.datePlayed)}</td>
        </tr>
      `
  );

  let html = "";

  isEmpty(currentEvent) === true
    ? (html += /*html*/ `
      
      ${
        !showAll
          ? `
          <div class="top-container">
          <div class="logout-div" onclick="menuView()">  
          <i class="fa-solid fa-arrow-right-from-bracket log-out-btn"></i>
        </div>
      <div class="logo-container">
      <svg width="155" height="97" viewBox="0 0 155 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M78.4396 67.1264C78.2888 66.5116 78.051 65.9722 77.7262 65.5082C77.4014 65.0326 76.9954 64.6323 76.5082 64.3075C76.0326 63.9711 75.4757 63.7217 74.8377 63.5593C74.2113 63.3853 73.5211 63.2983 72.767 63.2983C71.143 63.2983 69.7567 63.6869 68.6083 64.4641C67.4715 65.2414 66.6014 66.3608 65.9982 67.8224C65.4066 69.2841 65.1108 71.0473 65.1108 73.1122C65.1108 75.2003 65.395 76.9867 65.9634 78.4716C66.5318 79.9564 67.3787 81.0933 68.5039 81.8821C69.6291 82.6709 71.027 83.0653 72.6974 83.0653C74.1707 83.0653 75.3945 82.8507 76.369 82.4215C77.355 81.9923 78.0916 81.3833 78.5788 80.5945C79.0661 79.8056 79.3097 78.8776 79.3097 77.8104L80.9801 77.9844H72.8366V71.0938H88.6364V76.0355C88.6364 79.2836 87.9461 82.0619 86.5657 84.3704C85.1969 86.6673 83.306 88.4305 80.8931 89.6602C78.4918 90.8782 75.7367 91.4872 72.6278 91.4872C69.1593 91.4872 66.1142 90.7506 63.4925 89.2773C60.8709 87.8041 58.8234 85.7044 57.3501 82.9783C55.8885 80.2522 55.1577 77.0099 55.1577 73.2514C55.1577 70.3049 55.6043 67.6948 56.4975 65.4212C57.4023 63.1475 58.6552 61.2276 60.256 59.6616C61.8569 58.0839 63.7072 56.8949 65.8068 56.0945C67.9065 55.2824 70.157 54.8764 72.5582 54.8764C74.6695 54.8764 76.63 55.178 78.4396 55.7812C80.2609 56.3729 81.8675 57.2197 83.2596 58.3217C84.6632 59.4122 85.7943 60.7056 86.6527 62.2021C87.5111 63.6985 88.0331 65.34 88.2188 67.1264H78.4396ZM93.1475 91V55.3636H118.831V63.1591H102.822V69.2841H117.508V77.0795H102.822V83.2045H118.761V91H93.1475ZM122.654 63.1591V55.3636H153.627V63.1591H142.909V91H133.373V63.1591H122.654Z" fill="#EE7100"/>
      <path d="M72.6093 50.2677C63.8652 50.2677 56.2729 55.294 52.6077 62.6241L12.0286 22.0469L12.1333 21.9422L22.6228 11.4532C37.8945 -3.81774 62.6434 -3.81774 77.9151 11.4532C89.6263 23.1639 92.3491 40.4768 86.0833 54.7879C82.3483 51.9431 77.6708 50.2677 72.6093 50.2677ZM8.60771 26.5148L50.6355 68.5405C50.3911 69.8494 50.269 71.2107 50.269 72.6069C50.269 76.6559 51.3511 80.4431 53.2186 83.7242C52.695 83.7591 52.1539 83.7765 51.6129 83.7765H51.1416C45.2249 83.7765 39.5351 81.4204 35.3463 77.2318L33.6359 75.5215C31.3495 73.2352 27.597 73.3574 25.4677 75.8182L15.3971 87.4416C14.3848 88.6109 12.9187 89.309 11.3828 89.3614C9.8469 89.4137 8.32846 88.8203 7.2289 87.7208L1.64381 82.136C0.544249 81.0365 -0.0491667 79.5356 0.00319343 77.9998C0.0555536 76.4639 0.753689 74.9979 1.92307 73.9857L13.547 63.9156C15.9905 61.7863 16.1301 58.034 13.8437 55.7478L12.1333 54.0374C7.94449 49.8314 5.58828 44.1418 5.58828 38.2254V37.7542C5.58828 33.775 6.65293 29.918 8.60771 26.5322V26.5148Z" fill="#072D35"/>
      </svg>
      </div> 
      `
          : `<div class="top-container">
          <div class="logout-div" onclick="menuView()">  
          <i class="fa-solid fa-arrow-right-from-bracket log-out-btn"></i>
        </div>
      <div class="logo-container">
      <svg width="155" height="97" viewBox="0 0 155 97" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M78.4396 67.1264C78.2888 66.5116 78.051 65.9722 77.7262 65.5082C77.4014 65.0326 76.9954 64.6323 76.5082 64.3075C76.0326 63.9711 75.4757 63.7217 74.8377 63.5593C74.2113 63.3853 73.5211 63.2983 72.767 63.2983C71.143 63.2983 69.7567 63.6869 68.6083 64.4641C67.4715 65.2414 66.6014 66.3608 65.9982 67.8224C65.4066 69.2841 65.1108 71.0473 65.1108 73.1122C65.1108 75.2003 65.395 76.9867 65.9634 78.4716C66.5318 79.9564 67.3787 81.0933 68.5039 81.8821C69.6291 82.6709 71.027 83.0653 72.6974 83.0653C74.1707 83.0653 75.3945 82.8507 76.369 82.4215C77.355 81.9923 78.0916 81.3833 78.5788 80.5945C79.0661 79.8056 79.3097 78.8776 79.3097 77.8104L80.9801 77.9844H72.8366V71.0938H88.6364V76.0355C88.6364 79.2836 87.9461 82.0619 86.5657 84.3704C85.1969 86.6673 83.306 88.4305 80.8931 89.6602C78.4918 90.8782 75.7367 91.4872 72.6278 91.4872C69.1593 91.4872 66.1142 90.7506 63.4925 89.2773C60.8709 87.8041 58.8234 85.7044 57.3501 82.9783C55.8885 80.2522 55.1577 77.0099 55.1577 73.2514C55.1577 70.3049 55.6043 67.6948 56.4975 65.4212C57.4023 63.1475 58.6552 61.2276 60.256 59.6616C61.8569 58.0839 63.7072 56.8949 65.8068 56.0945C67.9065 55.2824 70.157 54.8764 72.5582 54.8764C74.6695 54.8764 76.63 55.178 78.4396 55.7812C80.2609 56.3729 81.8675 57.2197 83.2596 58.3217C84.6632 59.4122 85.7943 60.7056 86.6527 62.2021C87.5111 63.6985 88.0331 65.34 88.2188 67.1264H78.4396ZM93.1475 91V55.3636H118.831V63.1591H102.822V69.2841H117.508V77.0795H102.822V83.2045H118.761V91H93.1475ZM122.654 63.1591V55.3636H153.627V63.1591H142.909V91H133.373V63.1591H122.654Z" fill="#EE7100"/>
<path d="M72.6093 50.2677C63.8652 50.2677 56.2729 55.294 52.6077 62.6241L12.0286 22.0469L12.1333 21.9422L22.6228 11.4532C37.8945 -3.81774 62.6434 -3.81774 77.9151 11.4532C89.6263 23.1639 92.3491 40.4768 86.0833 54.7879C82.3483 51.9431 77.6708 50.2677 72.6093 50.2677ZM8.60771 26.5148L50.6355 68.5405C50.3911 69.8494 50.269 71.2107 50.269 72.6069C50.269 76.6559 51.3511 80.4431 53.2186 83.7242C52.695 83.7591 52.1539 83.7765 51.6129 83.7765H51.1416C45.2249 83.7765 39.5351 81.4204 35.3463 77.2318L33.6359 75.5215C31.3495 73.2352 27.597 73.3574 25.4677 75.8182L15.3971 87.4416C14.3848 88.6109 12.9187 89.309 11.3828 89.3614C9.8469 89.4137 8.32846 88.8203 7.2289 87.7208L1.64381 82.136C0.544249 81.0365 -0.0491667 79.5356 0.00319343 77.9998C0.0555536 76.4639 0.753689 74.9979 1.92307 73.9857L13.547 63.9156C15.9905 61.7863 16.1301 58.034 13.8437 55.7478L12.1333 54.0374C7.94449 49.8314 5.58828 44.1418 5.58828 38.2254V37.7542C5.58828 33.775 6.65293 29.918 8.60771 26.5322V26.5148Z" fill="#072D35"/>
</svg>
      </div> `
      }
      
          ${
            recentMatches.length == 0
              ? "Du har ikke spilt noen kamper"
              : `
              <table class="history">
                <thead style="background-color: black; color: white;">
                  <tr>
                      <th>navn</th>
                      <th>vinner</th>
                      <th>dato</th>
                  </tr>
                  </thead>
                  <tbody>
                      ${model.inputs.history.showAll === false ? recentMatches.join("") : allMatches.join("")}
                    <tr onclick="model.inputs.history.showAll = !model.inputs.history.showAll; historyView()>
                      <td></td>
                      <td>
                        <i class="fa-solid fa-ellipsis expand"></i>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                  </table>
              </div>`
          }
      </div>
    `)
    : Object.hasOwn(model.inputs.history.showEvent, "matchId")
    ? (html += /*html*/ `
      <div>${convertTime(currentEvent.datePlayed)}</div>
      <div>Navn: ${getUserName(currentEvent.participants[0].playerId)}  Score: ${
        currentEvent.participants[0].matchScore
      }</div>
      <div>Navn: ${getUserName(currentEvent.participants[1].playerId)}  Score: ${
        currentEvent.participants[1].matchScore
      }</div>
      <button class="btn filled" onclick="model.inputs.history.showEvent = {}; historyView()">tilbake</button>
    `)
    : (html += /*html*/ `
      <div>${currentEvent.tournamentName}</div>
      <div>${convertTime(currentEvent.datePlayed)}</div>
      <div>
      ${getTournamentPlayers()
        .map((player) => `<div>${player}</div>`)
        .join("")}
      </div>
      <div>${getUserName(currentEvent.winnerId)}</div>
      <button class="btn filled" onclick="model.inputs.history.showEvent = {}; historyView()">tilbake</button>
      `);

  app.innerHTML = html;
}

function getLoggedInUserId() {
  // Gets the ID of current logged in user
  let userId;
  let users = model.data.users;

  for (let i = 0; i < users.length; i++) {
    if (users[i].userName === model.app.user) {
      userId = users[i].id;
    }
  }
  return userId;
}

function listAllEvents(loggedInUser) {
  //List all matches of current user
  const matches = model.data.matches.filter(
    (match) => loggedInUser === match.participants[0].playerId || loggedInUser === match.participants[1].playerId
  );
  //List all tournaments of current user
  const tMatches = model.data.tournaments.filter((tournament) => tournament.players.includes(loggedInUser));
  //Join the two lists two a new list (non-intrusive)
  const allMatches = matches.concat(tMatches);
  //Sort all events by date
  allMatches.sort((a, b) => {
    if (a.datePlayed > b.datePlayed) {
      return -1;
    } else if (a.datePlayed < b.datePlayed) {
      return 1;
    } else {
      return 0;
    }
  });
  return allMatches;
}

function convertTime(t) {
  d = new Date(t);
  let date = d.toLocaleDateString("nb-no", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
  let time = d.toLocaleTimeString("nb-no", {
    hour: "2-digit",
    minute: "2-digit",
  });
  // date = date.slice(0, -4) + date.slice(-2, date.length);
  // time = time.slice(0, -3);

  return date + " " + time;
}

function getUserName(id) {
  const user = model.data.users.filter((item) => item.id === id);
  return user[0].userName;
}

function getMatchWinner(matchup) {
  const winner = matchup.filter((player) => player.matchScore === 10);
  return typeof winner[0].playerId === "string" ? winner[0].playerId : getUserName(winner[0].playerId);
}

function getOpponent(matchup) {
  const opponent = matchup.participants.filter((item) => item.playerId != getLoggedInUserId());
  return typeof opponent[0].playerId === "string" ? opponent[0].playerId : getUserName(opponent[0].playerId);
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function getTournamentPlayers() {
  const players = model.inputs.history.showEvent.players.map((player) => getUserName(player));
  return players;
}

//controller

function getEvent(index) {
  const event = listAllEvents(getLoggedInUserId())[index];
  model.inputs.history.showEvent = event;
  historyView();
}
