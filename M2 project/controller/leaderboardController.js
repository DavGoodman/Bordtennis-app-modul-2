function ChangeCategory(gameType){
    model.inputs.leaderboard.category = gameType
    leaderboardView()
}

function sortBy(sort){
    model.inputs.leaderboard.sortBy = sort.value
    model.app.leaderboradSelectIndex = sort.selectedIndex
    leaderboardView()
}