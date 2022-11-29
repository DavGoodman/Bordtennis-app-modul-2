//David

//logInView();
function logInView(err, errMsg) {
  let app = document.getElementById("app");

  view = model.app.view;
  console.log(view);

  let html = "";
  html += /*HTML*/ `
  <div class="logo-container">
    <img class='logo' src="assets/Logo.svg" alt="tennis icon"/>
  </div>  
    
    <div class="login--inputs">${
      view === "login-menu"
        ? ""
        : view === "login"
        ? `
    
    <input class="login-input" oninput="model.inputs.login.userName = this.value" placeholder="brukernavn" type="text">
    <input class="login-input" oninput="model.inputs.login.password = this.value" placeholder="passord" type="password">`
        : /*HTML*/ `
    <div style="display: flex;">
      <input class="login-input" oninput="model.inputs.register.firstName = this.value" placeholder="fornavn" type="text">
      <input class="login-input" oninput="model.inputs.register.lastName = this.value" placeholder="etternavn" type="text">
    </div>

   
      <input class="login-input" oninput="model.inputs.register.userName = this.value" placeholder="brukernavn" type="text">
   

  
      <input class="login-input" oninput="model.inputs.register.password = this.value" placeholder="passord" type="password">
  
   
      <input class="login-input" oninput="model.inputs.register.confirmPassword = this.value" placeholder="bekreft passord" type="password">
   
      

    `
    }</div>

      <div>${err ? errMsg : ""}</div>



   

    <button class="btn filled" ${
      view === "login-menu"
        ? `onclick="toLogin('login')"`
        : view === "login"
        ? `onclick="login()"`
        : `onclick="register()"`
    }>

        ${view === "register" ? "registrer" : "LOGG INN"}
     </button>

    <button class="btn" ${view === "login-menu" ? `onclick="toLogin('register')"` : `onclick="toLogin('login-menu')"`}>
          ${view === "login-menu" ? "NY BRUKER" : "avbryt"}
    </button>
    `;

  app.innerHTML = html;
}
