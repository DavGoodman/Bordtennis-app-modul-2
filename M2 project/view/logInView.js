//David

//test();
function test() {
  let daysInMs = 7 * 60 * 60 * 24 * 1000;
  console.log(daysInMs);

  let now = new Date().getTime();

  let test = model.data.matches.filter((match) => now - new Date(match.datePlayed).getTime() < daysInMs);

  console.log(test);
}

logInView();
function logInView(err, errMsg) {
  // model.app.view = "login"
  let app = document.getElementById("app");

  view = model.app.view;
  console.log(view);

  // let menu = "login-menu" === view
  // let login = "login" === view
  // let register = "register" === view

  // console.log(menu, login, register)

  let html = "";
  html += /*HTML*/ `
  <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
    
    <div class="login--inputs">${
      view === "login-menu"
        ? ""
        : view === "login"
        ? `

    <div><input oninput="model.inputs.login.userName = this.value" placeholder="brukernavn" type="text"></div>
    <div><input oninput="model.inputs.login.password = this.value" placeholder="passord" type="password"></div>`
        : /*HTML*/ `
    <div>
      <input oninput="model.inputs.register.firstName = this.value" placeholder="fornavn" type="text">
      <input oninput="model.inputs.register.lastName = this.value" placeholder="etternavn" type="text">
    </div>

   
      <input oninput="model.inputs.register.userName = this.value" placeholder="brukernavn" type="text">
   

  
      <input oninput="model.inputs.register.password = this.value" placeholder="passord" type="password">
  
   
      <input oninput="model.inputs.register.confirmPassword = this.value" placeholder="bekreft passord" type="password">
   
      

    `
    }</div>

      <div>${err ? errMsg : ""}</div>



   

    <button ${
      view === "login-menu"
        ? `onclick="toLogin('login')"`
        : view === "login"
        ? `onclick="login()"`
        : `onclick="register()"`
    }>

        ${view === "register" ? "submit" : "log in"}
     </button>

    <button ${view === "login-menu" ? `onclick="toLogin('register')"` : `onclick="toLogin('login-menu')"`}>
        ${view === "login-menu" ? "registrer" : "avbryt"}
    </button>
    `;

  app.innerHTML = html;
}

// let smt = `
//   <button ${
//     view === "login-menu"
//       ? `onclick="toLogin('login')"`
//       : view === "login"
//       ? `onclick="login()"`
//       : `onclick="register()"`
//   }>

//   ${view === "register" ? "submit" : "log in"}
//   </button>

//   <button ${view === "login-menu" ? `onclick="toLogin('register')"` : `onclick="toLogin('login-menu')"`}>
//   ${view === "login-menu" ? "registrer" : "avbryt"}
//   </button>`;
