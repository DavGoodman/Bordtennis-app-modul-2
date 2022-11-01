// function view(){
//     let app = document.getElementById("app")
//     let html = ""

//     html = logInView()

//     app.innerHTML = html
// }

// logInView();
function logInView() {
  let app = document.getElementById("app");
  console.log(model);
  let html = "";
  html += `
    <img src="" alt="tennis icon"/>
    <button>log in</button>
    <button>register</button>
    `;
  app.innerHTML = html;
}
