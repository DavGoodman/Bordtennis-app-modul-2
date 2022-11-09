function ChangeCategory(gameType){
    model.inputs.leaderboard.category = gameType
    leaderboardView()
}

function sortBy(sort){
    model.inputs.leaderboard.sortBy = sort.value
    model.app.leaderboradSelectIndex = sort.selectedIndex
    leaderboardView()
}

function sortDate(days){
    model.inputs.leaderboard.showLast = days
    resetLastMatches()
    timedMatches()
    leaderboardView()
}