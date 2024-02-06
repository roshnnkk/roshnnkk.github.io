const menuButton = document.getElementById("hamburger-btn");
const showMenu = document.getElementById("hamburger-show");

function openHamburgerMenu() {
  menuButton.classList.remove("hamburger-menu");
  menuButton.classList.add("change-button");
  showMenu.style.display = "block";

//   const backButton = document.getElementsByClassName("change-button");

//   function closeHamburgerMenu() {
//     backButton.onclick = function () {

//       menuButton.classList.remove("change-button");


//     };
//   }
}
