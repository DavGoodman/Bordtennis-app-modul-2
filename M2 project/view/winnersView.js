
function winnerView(name) {
  document.getElementById("app").innerHTML = `
  <div class="winner-background"></div>

  <div class="firework"></div>
  <div class="firework"></div>
  <div class="firework"></div>

  <div class="logo-container">
    <img class='logo' src="assets/Logo.svg" alt="tennis icon"/>
  </div> 

    <h1 class="win-text">
      ${name} vant ${model.data.ongoingTournament.tournamentName}-turneringen! Den gærningen...
    </h1>
    <button onclick="menuView()" class="btn filled">Tilbake</button>`;
    

}
