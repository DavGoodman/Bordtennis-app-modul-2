//David

function toLogin(loginView) {
  model.app.view = loginView;
  logInView();
}

function login() {
  let users = model.data.users;
  let username = model.inputs.login.userName;
  let password = model.inputs.login.password;

  let userFound = false;
  let notFilled = false;

  let errMsg = "Feil passord eller brukernavn";

  if (!username || !password) {
    errMsg = "Vennligst fyll ut alle feltene";
    notFilled = true;
  }

  for (let user of users) {
    if (notFilled) {
      break;
    }

    if (user.userName === username && user.password === password) {
      userFound = true;
      break;
    }
  }

  model.inputs.login.userName = "";
  model.inputs.login.password = "";

  if (userFound) {
    model.app.user = username;
    model.app.view = "menu";
    menuView();
    return;
  }

  logInView(true, errMsg);
}

function register() {
  let users = model.data.users;
  let username = model.inputs.register.userName;
  let firstName = model.inputs.register.firstName;
  let lastName = model.inputs.register.lastName;
  let password = model.inputs.register.password;
  let confirmPassword = model.inputs.register.confirmPassword;

  let errMsg = "";

  if (!username || !firstName || !lastName || !password || !confirmPassword) {
    errMsg = "Vennligst fyll ut alle felt";
    logInView(true, errMsg);
    return;
  }

  for (let user of users) {
    if (user.userName === username) {
      errMsg = "Brukernavn allerede i bruk";
      logInView(true, errMsg);
      return;
    }
  }

  if (username.length > 12) {
    errMsg = "Maks lengde er 12 karakterer";
    logInView(true, errMsg);
    return;
  }

  if (password !== confirmPassword) {
    errMsg = "Passordene er ikke like";
    logInView(true, errMsg);
    return;
  }

  if (
    password.length < 4 ||
    !containsNumber(password) ||
    !containsUppercase(password) ||
    !containsLowercase(password)
  ) {
    errMsg = "Passordet må bestå av minst 3 tegn og inneholde ett tall, én stor bokstav og én liten bokstav";
    logInView(true, errMsg);
    return;
  }

  model.data.users.push({
    id: users.length,
    userName: username,
    firstName: lastName,
    lastName: lastName,
    password: password,
    wins: 0,
    losses: 0,
    totalMatches: 0,
    tournamentWins: 0,
    tournamentLosses: 0,
    totalTournaments: 0,
  });

  console.log(model);
  toLogin("login-menu");
}

//HeisenBerg
//empire

function containsNumber(str) {
  return /\d/.test(str);
}

function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

function containsLowercase(str) {
  return /[a-z]/.test(str);
}
