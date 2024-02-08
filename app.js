const menuButton = document.getElementById("hamburger-btn");
const showMenu = document.getElementById("hamburger-show");

function removeMenu() {
  showMenu.style.display = "none";
  menuButton.classList.add("hamburger-menu");
  menuButton.classList.remove("change-button");
}

function addMenu() {
  showMenu.style.display = "block";
  menuButton.classList.remove("hamburger-menu");
  menuButton.classList.add("change-button");
}

function openHamburgerMenu() {
  var showMenu = document.getElementById("hamburger-show");
  if (showMenu.style.display === "block") {
    removeMenu();
  } else {
    addMenu();
  }
}
