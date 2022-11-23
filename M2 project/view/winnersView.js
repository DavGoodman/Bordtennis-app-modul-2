function winnerView(name) {
  document.getElementById("app").innerHTML = `
    <h1>
      ${name} vant ${model.data.ongoingTournament.tournamentName}-turneringen! Den gærningen...
    </h1>
    <button onclick="menuView()" class="btn filled">Tilbake</button>`;
}
