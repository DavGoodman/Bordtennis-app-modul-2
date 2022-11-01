function menuView() {
  let app = document.getElementById("app");
  let html = "";
  html += `
        <img src="" alt="tennis icon"/>
        <button>Nytt spill</button>
        <button>Ny turnering</button>
        <button>Ledertavle</button>
        <button></button>
        `;
  app.innerHTML = html;
}
