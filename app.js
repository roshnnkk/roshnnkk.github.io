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

///////////////my work slider

const images = [
  {
    img: (src = "assets/mywork1.png"),
  },

  {
    img: (src = "assets/mywork2.png"),
  },

  {
    img: (src = "assets/mywork3.png"),
  },

  {
    img: (src = "assets/mywork4.png"),
  },
];

const newImg = document.getElementById("my-work");
document.addEventListener("DOMContentLoaded", function () {
  const imgOne = images[0];
  newImg.src = imgOne.img;
});
///// button click actions

let currentImg = 0;

document.getElementById("next-btn").addEventListener("click", function () {
  if ((currentImg >= 0, currentImg < images.length - 1)) {
    currentImg++;
    newImg.src = images[currentImg].img;
  } else if (currentImg >= images.length - 1) currentImg = 0;
  newImg.src = images[currentImg].img;
});

document.getElementById("back-btn").addEventListener("click", function () {
  if (currentImg > 0) {
    currentImg--;
    newImg.src = images[currentImg].img;
  }else{
    currentImg = images.length - 1;
    newImg.src = images[currentImg].img;
  }



});
