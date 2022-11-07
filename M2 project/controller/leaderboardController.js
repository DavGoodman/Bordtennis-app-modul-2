function ChangeCategory(gameType){
    model.inputs.leaderboard.category = gameType
    leaderboardView()
}