const participants = ['anders', 'berit', 'clara', 'david', 'erlend', 'fredrik']
let roundPlayers;

function getPlayersAndByes(n) {
    const base = [2, 4, 8, 16, 32, 64, 128];
    for (let i = 0; i < base.length; i++) {
        if (base[i] < n && n < base[i + 1]) {
            roundPlayers = (n - base[i]) * 2;

            const byeList = participants.filter((item, index) => index >= roundPlayers);
            const roundPlayerList = participants.filter((item, index) => index < roundPlayers)
            return byeList, roundPlayerList
        }
    }
}

getPlayersAndByes(6)