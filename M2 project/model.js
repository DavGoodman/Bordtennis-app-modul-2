const model = {
    //app
    app: {
        view:"login", //login-menu-match-tournament-history-leaderboard
        user:"SaulGoodman",
        //lightMode: true, (nice-to-have)
        //language: "english" / "norsk" / "magyar"
        playingTournament: 1
    }, 
    
    //inputs
    inputs: {
        login: {
            userName:"",
            password:"",
        },
        register: {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            confirmPassword: "",
        },
         
        newMatch: { 
            invitedPlayer: "",
            score: [0, 0], 
            guest: "",
        },
        
        newTournament: {
            tournamentName: '',
            newParticpantName: ['Marius',],
            participants: [],
            matchScores: [            // n/2 +  (n/2) / 2 + ... until n=1  participants.length % 2 != 0 
                {
                    //round: 1,
                    matches:[
                        {players: [1,2], winner: 1}

                        // {player: [{playerId: 1, score: 10}, {playerId: 2, score: 6}]


                        
                        // {match1: [0, 0]},
                        // {
                        //     player1Score: [0, "Walter"],
                        //     player2Score: [0, "Jessie"]
                        // },
                        // {players: ["", ""], score: [0, 0]},
                        // {players: ["", ""], score: [0, 0]},

                        // {match2: [0, 0],}
                        // {match3: [0, 0],}
                        // {match4: [0, 0],}
                        // [0, 0],
                        // [0, 0],
                        // [0, 0],

                    ],
                    
                    
                },
                {
                  round: 2,
                  matches:[  
                    [0, 0],
                    [0, 0],
                ],
                },
                {
                    round: 3,
                    matches:[
                        [0, 0],
                    ],

                },
            ]
        },
        
        leaderboard: {
            sortBy:"wins", // wins - win rate - Name?
            category: "matches", //matches - tournaments
            showLast: "month" // day - month - year - all time?
        },
    },

    //data
    data: {
        users: [
            {
            id: 1,
            userName: '',
            firstName: '',
            lastName: '',
            password: '',
            wins: 0,
            losses: 0,
            totalMatches: 0,
            tournamentWins: 0,
            tournamentLosses: 0,
            totalTournaments: 0,
        
        },
            ],

        matches: [
            {
                matchId: 0,
                datePlayed: '13.12.22', //sjekk formatering ved Date.Now
                participants: [
                    {playerId: 1, matchScore: 10}, 
                    {playerId: 2, matchScore: 7}
                ]
            }
        ],

        // Ongoing Tournament?
        
        // Previous tournaments?
        tournaments: [
            {
                tournamentId: 0,
                datePlayed: '13.12.22',
                tournamentName: 'Fredags Turnering',
                players: [1, null, 3, null], // spillerId [{name: "Bjørnar", id: 1},{name: "Gjestamin", id: null?},]
                numOfMatches: 7, // basert på turneringsbraketten og antall spillere
                matches: [
                {
                    tournamentMatchId: 1,
                    round: 1,
                    participants: [{playerId: 1, matchScore: 10}, {playerId: 2, matchScore: 7}],
            },
                {
                    tournamentMatchId: 2,
                    round: 1,
                    participants: [{playerId: 1, matchScore: 10}, {playerId: 2, matchScore: 7}],
            },
                {
                    tournamentMatchId: 3,
                    round: 1, 
                    participants: [{playerId: 1, matchScore: 10}, {playerId: 2, matchScore: 7}],
            },
                {
                    tournamentMatchId: 4,
                    round: 1, 
                    participants: [{playerId: 1, matchScore: 10}, {playerId: 2, matchScore: 7}],
            },

                {
                    tournamentMatchId: 5,
                    round: 2, 
                    participants: [{playerId: 1, matchScore: 10}, {playerId: 2, matchScore: 7}],
            },
                {
                    tournamentMatchId: 6,
                    round: 2, 
                    participants: [{playerId: 1, matchScore: 10}, {playerId: 2, matchScore: 7}],
            },
                {
                    tournamentMatchId: 7,
                    round: 3, 
                    participants: [{playerId: 3, matchScore: 10}, {playerId: 2, matchScore: 7}],
            },

            ],
                //fightForThird: false, (nice-to-have)
                winnerId: 3,
            }
        ],

    },
    
}


// matchdata: userID, challengerID, datefinished, score, 
// (hente tournament match data) model.tournaments(filter ID).matches[i]




//users - først navn - etternavn brukernavn - passord - epost - id - ! gjestedata
//match-data - sett(nummer/antall) - score*(egen + motstander)
//tourneringsdata - alle spillerne - kampene/rundene - score - plasseringer
//leaderboard - antall vinn - (rating?) Mulig vi bare henter dette fra kampdata/stats.
//stats - 
//


//input
 // userlogin
 // user set up
 

 // function newUser(){ sjekker antall brukere, med array.length, og gir id array.length++}

 // vise stats: model.data.users.totalMatches

 // tracke wins: filtrere ut kamper med aktuell ID. sortere etter dato. if (less than 7 days) = date.now - date.(7 days ago) elns