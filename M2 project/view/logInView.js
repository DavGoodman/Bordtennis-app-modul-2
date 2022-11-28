//David

//logInView();
function logInView(err, errMsg) {

  let app = document.getElementById("app");

  view = model.app.view;
  console.log(view);

  let html = `<video src="../M2 project/assets/loginBackround.mp4" autoplay muted loop class="login-vid"></video>`;
  html += /*HTML*/ `
  <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
    
    <div class="login--inputs">${
      view === "login-menu"
        ? ''
        : view === "login"
        ? `
    
    <div><input class="login-input" oninput="model.inputs.login.userName = this.value" placeholder="brukernavn" type="text"></div>
    <div><input class="login-input" oninput="model.inputs.login.password = this.value" placeholder="passord" type="password"></div>`
        : /*HTML*/ `
    <div>
      <input class="login-input" oninput="model.inputs.register.firstName = this.value" placeholder="fornavn" type="text">
      <input class="login-input" oninput="model.inputs.register.lastName = this.value" placeholder="etternavn" type="text">
    </div>

   
      <input class="login-input" oninput="model.inputs.register.userName = this.value" placeholder="brukernavn" type="text">
   

  
      <input class="login-input" oninput="model.inputs.register.password = this.value" placeholder="passord" type="password">
  
   
      <input class="login-input" oninput="model.inputs.register.confirmPassword = this.value" placeholder="bekreft passord" type="password">
   
      

    `
    }</div>

      <div>${err ? errMsg : ""}</div>



   

    <button style="margin-top: 30px;" class="btn filled" ${
      view === "login-menu"
        ? `onclick="toLogin('login')"`
        : view === "login"
        ? `onclick="login()"`
        : `onclick="register()"`
    }>

        ${view === "register" ? "registrer" : "log in"}
     </button>

    <button style="margin-top: 30px;" class="btn" ${view === "login-menu" 
      ? `onclick="toLogin('register')"` 
      : `onclick="toLogin('login-menu')"`}>
          ${view === "login-menu" 
      ? "registrer" : "avbryt"}
    </button>
    `;

  app.innerHTML = html;
}

