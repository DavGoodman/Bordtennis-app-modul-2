const model = {
  //app
  app: {
    view: "login-menu", //login-menu-match-tournament-history-leaderboard
    user: null,
    playingTournament: 1,
    leaderboradSelectIndex: 0,

    //lightMode: true, (nice-to-have)
    //language: "english" / "norsk"
  },

  //inputss
  inputs: {
    login: {
      userName: "",
      password: "",
    },
    register: {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },

    newMatch: {
      invitedPlayer: [], // data.user[0].userName eller Gjestenavn.
      score: [],
      guest: "",
    },

    newTournament: {
      tournamentName: "",
      newParticpantName: "", // "søkefelt" for nye spillere eller gjestespillere.
      participants: [], // data.user[0]
      matchScores: [],
    },

    leaderboard: {
      sortBy: "wins", // wins - win rate% - (rating)?
      category: "tournaments", //matches - tournaments
      showLast: "month", // day - week - month - year - all time? days7, days30, days365, allTime
    },
  },

  //data
  data: {
    users: [
      {
        id: 0,
        userName: "HeisenBerg",
        firstName: "Walter",
        lastName: "White",
        password: "empire",
        wins: 3,
        losses: 2,
        tournamentWins: 1,
        tournamentLosses: 2,
      },
      {
        id: 1,
        userName: "Trinityn",
        firstName: "Bjørnar",
        lastName: "J",
        password: "pizza123",
        wins: 97,
        losses: 3,
        tournamentWins: 0,
        tournamentLosses: 0,
      },
      {
        id: 2,
        userName: "Robhimself",
        firstName: "Robert",
        lastName: "L",
        password: "monster",
        wins: 8,
        losses: 4,
        tournamentWins: 9,
        tournamentLosses: 1,
      },
      {
        id: 3,
        userName: "davyJones",
        firstName: "David",
        lastName: "Brynjarsson",
        password: "iloveSaulGoodman",
        wins: 43,
        losses: 88,
        tournamentWins: 0,
        tournamentLosses: 10,
      },
      {
        id: 4,
        userName: "benji",
        firstName: "Benjamin",
        lastName: "Lærer",
        password: "imdaman",
        wins: 12,
        losses: 4,
        tournamentWins: 2,
        tournamentLosses: 10,
      },
      {
        id: 5,
        userName: "dankert",
        firstName: "Simen",
        lastName: "Kristiansen",
        password: "kjørda",
        wins: 12,
        losses: 5,
        tournamentWins: 90,
        tournamentLosses: 0,
      },
    ],

    matches: [
      {
        matchId: 1,
        datePlayed: "2022-11-08T10:14:03.123Z", //ISO 8601
        participants: [
          { playerId: 1, matchScore: 10 },
          { playerId: 2, matchScore: 7 },
        ],
      },
      {
        matchId: 2,
        datePlayed: "2022-11-07T10:20:03.390Z", //ISO 8601
        participants: [
          { playerId: 2, matchScore: 10 },
          { playerId: 5, matchScore: 7 },
        ],
      },
      {
        matchId: 3,
        datePlayed: "2022-10-07T10:20:03.390Z", //ISO 8601
        participants: [
          { playerId: 2, matchScore: 10 },
          { playerId: 5, matchScore: 7 },
        ],
      },
      {
        matchId: 4,
        datePlayed: "2022-09-07T15:20:03.390Z", //ISO 8601
        participants: [
          { playerId: 2, matchScore: 10 },
          { playerId: 5, matchScore: 7 },
        ],
      },
    ],

    // Ongoing Tournament?

    ongoingTournament: {
      participants: ["AS", "Harald"],

      rounds: [
        [
          {
            players: ["david", "Simen"],
            score: [10, 8], // score.unshift(10)  // [0,0]
          },
          {
            players: ["Benjamin", "Terje"],
            score: [4, 10],
          },
          {
            players: ["Robert", "Bjørnar"],
            score: [10, 4],
          },
          {
            players: ["Linn", "Marie"],
            score: [10, 5],
          },
        ],
        [
          {
            players: ["David", "Terje"],
            score: [10, 8],
          },
          {
            players: ["Linn", "Bjørnar"],
            score: [10, 8],
          },
        ],
      ],
    },

    // Previous tournaments?
    tournaments: [
      {
        tournamentId: 0,
        datePlayed: "13.12.22",
        tournamentName: "Fredags Turnering",
        players: [1, null, 3, null], // participants: [data.user[0].userName, data.user[3].userName, "Harald"],
        numOfMatches: 7, // basert på turneringsbraketten og antall spillere
        matches: [
          {
            tournamentMatchId: 1,
            round: 1,
            participants: [
              { playerId: 1, matchScore: 10 },
              { playerId: 2, matchScore: 7 },
            ],
          },
          {
            tournamentMatchId: 2,
            round: 1,
            participants: [
              { playerId: 3, matchScore: 10 },
              { playerId: 4, matchScore: 7 },
            ],
          },
          {
            tournamentMatchId: 3,
            round: 1,
            participants: [
              { playerId: 5, matchScore: 10 },
              { playerId: 6, matchScore: 7 },
            ],
          },
          {
            tournamentMatchId: 4,
            round: 1,
            participants: [
              { playerId: 7, matchScore: 10 },
              { playerId: 8, matchScore: 7 },
            ],
          },

          {
            tournamentMatchId: 5,
            round: 2,
            participants: [
              { playerId: 1, matchScore: 10 },
              { playerId: 3, matchScore: 7 },
            ],
          },
          {
            tournamentMatchId: 6,
            round: 2,
            participants: [
              { playerId: 5, matchScore: 10 },
              { playerId: 7, matchScore: 7 },
            ],
          },
          {
            tournamentMatchId: 7,
            round: 3,
            participants: [
              { playerId: 1, matchScore: 10 },
              { playerId: 5, matchScore: 7 },
            ],
          },
        ],
        winnerId: 1,
        //fightForThird: false, (nice-to-have)
      },
    ],
  },
};
