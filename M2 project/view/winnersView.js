function winnerView(name) {
  document.getElementById("app").innerHTML = `
  <div style="display: flex; flex-direction: row; align-content: bottom; ">
    <img class='logo' src="assets/Logo.svg" alt="tennis icon"/>
  </div> 

    <h1>
      ${name} vant ${model.data.ongoingTournament.tournamentName}-turneringen! Den gærningen...
    </h1>
    <button onclick="menuView()" class="btn filled">Tilbake</button>`;
}
