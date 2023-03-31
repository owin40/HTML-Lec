//buat submit formnya
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // biar ga disubmit default
  const avatar = document.querySelector('input[name="avatar"]:checked').value; // avatarnya di pilih
  const name = document.getElementById("name_input").value; // namanya
  localStorage.setItem("avatar", avatar); // save avatar ke local
  localStorage.setItem("name", name); // save name ke local
  alert("Avatar dan nama berhasil disimpan!"); // display success message
});

//muncul prompt ditengah pas submit
const avatarContainer = document.querySelector("#avatar_container");
const promptBox = document.querySelector("#myPrompt");

avatarContainer.addEventListener("click", function (event) {
  // Cek kalo yang di klik itu avatar
  if (event.target.classList.contains("avatar")) {
    // Ambil nama avatar dari attribute "alt" di tag <img>
    const avatarName = event.target.querySelector("img").getAttribute("alt");

    // Ambil nama pet dari input dengan id "name_input"
    const petName = document.querySelector("#name_input").value;

    // Update pesan di alert
    const message = `Pet kamu ${petName} The ${avatarName} telah terpilih`;
    alert(message);
  }
});
