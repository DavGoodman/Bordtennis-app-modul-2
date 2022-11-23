const participants = ['anders', 'berit', 'clara', 'david', 'erlend', 'fredrik', 'geir', 'halvor', 'ivar', 'jonas', 'kurt', 'lars']
let roundPlayers;

function getPlayersAndByes(n) {
    let base = [2, 4];
    for (let i = 0; i < base.length; i++) {
        if (base[i] < n && n < base[i + 1]) {
            roundPlayers = (n - base[i]) * 2;
            const byeList = participants.filter((item, index) => index >= roundPlayers);
            const roundPlayerList = participants.filter((item, index) => index < roundPlayers)
            console.log(roundPlayerList, byeList)
            return byeList, roundPlayerList
        } else if (n > base[base.length - 1]) {
            base.push(base[base.length - 1] * 2)
            console.log('hei', base)
        }
    }
}
getPlayersAndByes(participants.length)
