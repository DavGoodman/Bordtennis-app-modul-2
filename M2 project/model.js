const model = {
  //app
  app: {
    view: "login-menu", //login-menu-match-tournament-history-leaderboard
    user: "developer",
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
      invitedPlayer: [],
      score: [],
    },

    newTournament: {
      tournamentName: "",
      participants: [],
    },

    ongoingTournament: {
      score: [],
    },

    leaderboard: {
      sortBy: "wins", // wins - win rate% - (rating)?
      category: "matches", //matches - tournaments
      showLast: 7, // in days
    },

    history: {
      showAll: false,
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
        lastWins: 0,
        lastLosses: 0,
        lastTourneyWins: 0,
        lastTourneyLosses: 0,
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
        lastWins: 0,
        lastLosses: 0,
        lastTourneyWins: 0,
        lastTourneyLosses: 0,
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
        lastWins: 0,
        lastLosses: 0,
        lastTourneyWins: 0,
        lastTourneyLosses: 0,
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
        lastWins: 0,
        lastLosses: 0,
        lastTourneyWins: 0,
        lastTourneyLosses: 0,
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
        lastWins: 0,
        lastLosses: 0,
        lastTourneyWins: 0,
        lastTourneyLosses: 0,
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
        lastWins: 0,
        lastLosses: 0,
        lastTourneyWins: 0,
        lastTourneyLosses: 0,
      },
      {
        id: 1337,
        userName: "developer",
        firstName: "Bruce",
        lastName: "L33t",
        password: "get",
        wins: 69,
        losses: 69,
        tournamentWins: 420,
        tournamentLosses: 0,
        lastWins: 0,
        lastLosses: 0,
        lastTourneyWins: 0,
        lastTourneyLosses: 0,
      },
      {
        id: 6969,
        userName: "Newbie",
        firstName: "Anders",
        lastName: "Olsen",
        password: "get",
        wins: 0,
        losses: 0,
        tournamentWins: 0,
        tournamentLosses: 0,
        lastWins: 0,
        lastLosses: 0,
        lastTourneyWins: 0,
        lastTourneyLosses: 0,
      },
    ],

    matches: [
      {
        matchId: 1,
        datePlayed: "2022-11-08T10:14:03.123Z", //ISO 8601
        participants: [
          { playerId: 4, matchScore: 10 },
          { playerId: 2, matchScore: 7 },
        ],
      },
      {
        matchId: 2,
        datePlayed: "2022-11-07T10:20:03.390Z", //ISO 8601
        participants: [
          { playerId: 4, matchScore: 10 },
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
          { playerId: 2, matchScore: 7 },
          { playerId: 1, matchScore: 10 },
        ],
      },
      {
        matchId: 5,
        datePlayed: "2022-04-07T15:20:03.390Z", //ISO 8601
        participants: [
          { playerId: 5, matchScore: 10 },
          { playerId: 2, matchScore: 7 },
        ],
      },
      {
        matchId: 6,
        datePlayed: "2022-04-07T15:16:03.390Z", //ISO 8601
        participants: [
          { playerId: 1337, matchScore: 10 },
          { playerId: 4, matchScore: 7 },
        ],
      },
      {
        matchId: 7,
        datePlayed: "2022-04-07T15:15:03.390Z", //ISO 8601
        participants: [
          { playerId: 5, matchScore: 10 },
          { playerId: 2, matchScore: 7 },
        ],
      },
      {
        matchId: 8,
        datePlayed: "2022-04-06T15:20:03.390Z", //ISO 8601
        participants: [
          { playerId: 2, matchScore: 10 },
          { playerId: 1337, matchScore: 7 },
        ],
      },
      {
        matchId: 9,
        datePlayed: "2022-04-04T15:20:03.390Z", //ISO 8601
        participants: [
          { playerId: 1337, matchScore: 10 },
          { playerId: 1, matchScore: 7 },
        ],
      },
      {
        matchId: 10,
        datePlayed: "2022-04-03T15:20:03.390Z", //ISO 8601
        participants: [
          { playerId: 1337, matchScore: 10 },
          { playerId: 5, matchScore: 7 },
        ],
      },
      {
        matchId: 11,
        datePlayed: "2022-04-03T15:21:03.390Z", //ISO 8601
        participants: [
          { playerId: 1337, matchScore: 10 },
          { playerId: 4, matchScore: 7 },
        ],
      },
      {
        matchId: 12,
        datePlayed: "2022-04-03T15:12:03.390Z", //ISO 8601
        participants: [
          { playerId: 1337, matchScore: 10 },
          { playerId: 1, matchScore: 7 },
        ],
      },
      {
        matchId: 13,
        datePlayed: "2022-03-02T15:20:03.390Z", //ISO 8601
        participants: [
          { playerId: 3, matchScore: 8 },
          { playerId: 1337, matchScore: 10 },
        ],
      },
      {
        matchId: 14,
        datePlayed: "2022-03-02T15:22:03.390Z", //ISO 8601
        participants: [
          { playerId: 1, matchScore: 10 },
          { playerId: 2, matchScore: 7 },
        ],
      },
      {
        matchId: 15,
        datePlayed: "2022-03-01T15:11:03.390Z", //ISO 8601
        participants: [
          { playerId: 2, matchScore: 10 },
          { playerId: 1337, matchScore: 7 },
        ],
      },
    ],

    ongoingTournament: {
      //creatorId: 3,
      tournamentName: "",
      participants: [], // alle deltakerne fra start.
      currentRoundParticipants: [], // for å plassere forrige rundes vinnere, og generere nye kamper.
      waitingParticipants: [], // ved odd-turnering plasseres bye-spillere her til runde 1 er ferdigspilt.
      currentRound: null, // henter info til rounds-obj, og displayer rundeNr i viewet.
      rounds: [],
    },

    tournaments: [
      {
        tournamentId: 0,
        datePlayed: "2022-11-05T10:14:03.123Z",
        tournamentName: "Fredagsturnering",
        players: [1, 2, 5, 3, 4, 1337],
        matches: [
          {
            round: 1,
            participants: [
              { playerId: 1, matchScore: 10 },
              { playerId: 2, matchScore: 7 },
            ],
          },
          {
            round: 1,
            participants: [
              { playerId: 1337, matchScore: 10 },
              { playerId: 5, matchScore: 7 },
            ],
          },
          {
            round: 1,
            participants: [
              { playerId: 3, matchScore: 10 },
              { playerId: 4, matchScore: 7 },
            ],
          },
          {
            round: 1,
            participants: [
              { playerId: 7, matchScore: 10 },
              { playerId: 8, matchScore: 7 },
            ],
          },

          {
            round: 2,
            participants: [
              { playerId: 1337, matchScore: 10 },
              { playerId: 1, matchScore: 7 },
            ],
          },
          {
            round: 2,
            participants: [
              { playerId: 7, matchScore: 10 },
              { playerId: 3, matchScore: 7 },
            ],
          },
          {
            round: 3,
            participants: [
              { playerId: 1, matchScore: 10 },
              { playerId: 5, matchScore: 7 },
            ],
          },
        ],
        winnerId: 1337,
      },
      {
        tournamentId: 1,
        datePlayed: "2022-10-22T15:11:03.245Z",
        tournamentName: "LørdagsTurnering",
        players: [1, 2, 3, 5],
        matches: [],
        winnerId: 2,
      },
      {
        tournamentId: 2,
        datePlayed: "2022-09-15T15:11:03.245Z",
        tournamentName: "Test 2",
        players: [1, "ivar", 3, "steinar", 5],
        matches: [
          {
            round: 1,
            participants: [
              { playerId: 1, matchScore: 10 },
              { playerId: 2, matchScore: 7 },
            ],
          },
          {
            round: 1,
            participants: [
              { playerId: 3, matchScore: 10 },
              { playerId: 4, matchScore: 7 },
            ],
          },
          {
            round: 1,
            participants: [
              { playerId: 5, matchScore: 10 },
              { playerId: 6, matchScore: 7 },
            ],
          },
          {
            round: 1,
            participants: [
              { playerId: 7, matchScore: 10 },
              { playerId: 8, matchScore: 7 },
            ],
          },

          {
            round: 2,
            participants: [
              { playerId: 1, matchScore: 10 },
              { playerId: 3, matchScore: 7 },
            ],
          },
          {
            round: 2,
            participants: [
              { playerId: 5, matchScore: 10 },
              { playerId: 7, matchScore: 7 },
            ],
          },
          {
            round: 3,
            participants: [
              { playerId: 1, matchScore: 10 },
              { playerId: 5, matchScore: 7 },
            ],
          },
        ],
        winnerId: 1,
      },
    ],
  },
};
