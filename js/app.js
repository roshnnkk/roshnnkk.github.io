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
  } else {
    currentImg = images.length - 1;
    newImg.src = images[currentImg].img;
  }
});

////////add photos to html//////

const foodImages = [
  {
    img: "assets/food/1.jpg",
    title: "food photography",
    text: "advertising project for restaurant",
  },

  {
    img: "assets/food/2.jpg",
    title: "food photography",
    text: "advertising project for restaurant",
  },

  {
    img: "assets/food/3.jpg",
    title: "food photography",
    text: "advertising project for restaurant",
  },

  {
    img: "assets/food/4.jpg",
    title: "advertising photography",
    text: "advertising project for Like cafe",
  },
  {
    img: "assets/food/7.jpg",
    title: "advertising photography",
    text: "advertising project for like cafe",
  },
  {
    img: "assets/food/16.jpg",
    title: "food photography",
    text: "advertising project for chill cafe",
  },
  {
    img: "assets/food/10.jpg",
    title: "food photography",
    text: "advertising project for chill cafe",
  },
  {
    img: "assets/food/11.jpg",
    title: "food photography",
    text: "advertising project for restaurant",
  },
  {
    img: "assets/food/12.jpg",
    title: "food photography",
    text: "advertising project for restaurant",
  },
  {
    img: "assets/food/13 (2).jpg",
    title: "food photography",
    text: "advertising project for like cafe",
  },
];

function addPhotos() {
  document.getElementById("food-photography-alternative").innerHTML = foodImages
    .map(
      (image) => `
<figure>
<img src="${image.img}" class="responsive img1" />
<figcaption class="overlay">
  <h5>${image.title}</h5>
  <p>${image.text}</p>
</figcaption>
</figure>

`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  addPhotos();
});
