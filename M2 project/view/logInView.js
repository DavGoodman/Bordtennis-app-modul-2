// function view(){
//     let app = document.getElementById("app")
//     let html = ""

//     html = logInView()

//     app.innerHTML = html
// }

logInView();
function logInView() {
  model.app.view ="login-menu"
  view = model.app.view

  let app = document.getElementById("app");
  console.log(model)

  let html = "";
  html +=  `
  <img class="logo" src="assets/table-tennis-paddle-ball-solid.svg">
    
    <div class="login--inputs">${view === "login-menu"? "" : view ==="login"? `

    <div><input placeholder="brukernavn" type="text"></div>
    <div><input placeholder="passord" type="text"></div>`
    : `
    <div>
      <input placeholder="førstenavn" type="text">
      <input placeholder="etternavn" type="text">
    </div>

   
      <input placeholder="brukernavn" type="text">
   

  
      <input placeholder="passord" type="text">
  
   
      <input placeholder="bekreft passord" type="text">
   
    

    `}</div>

   

    <button>${view === "register" ? "submit" : "log in"}</button>
    <button> ${view === "login-menu" ? "registrer" : "avbryt"}</button>
    `;
  app.innerHTML = html;
}
