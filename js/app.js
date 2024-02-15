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
  } else if (currentImg >= images.length - 1) {
    currentImg = 0;
    newImg.src = images[currentImg].img;
  }
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
    img: "assets/food/1.JPG",
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
    img: "assets/food/16.JPG",
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

////////////add buttons for comments////

const NewComments = [
  {
    img: "assets/users/p1.jpg",
    comments: `“Working with you was an absolute delight! Your attention to
  detail in web development and your eye for capturing stunning
  photographs truly set you apart. Thank you for making our project
  shine!”`,
    name: "Orson Ward",
  },

  {
    img: "assets/users/p2.jpg",
    comments: `“As a fellow developer, collaborating with you was a breeze. Your code is clean, efficient, and well-organized. Plus, your photography skills added a creative touch to our team’s portfolio. Looking forward to more projects together!”`,
    name: "June Booth",
  },
  {
    img: "assets/users/p3.jpg",
    comments: `“Your ability to seamlessly blend your technical expertise with your artistic flair is remarkable. Our website wouldn’t be the same without your contributions. Kudos for being a reliable and innovative team member!”`,
    name: "Cole Cooper",
  },
  {
    img: "assets/users/p4.jpg",
    comments: `“Your patience during the shoot and the way you captured our brand’s essence exceeded our expectations. And when you switched gears to web development, you brought the same dedication. Truly a versatile talent!”`,
    name: "Tyler Lawson",
  },
  {
    img: "assets/users/p5.jpg",
    comments: `“ Your ability to translate our vision into a functional website was impressive. And when you picked up the camera for our product photoshoot, the results were nothing short of stunning. Looking forward to future projects!”`,
    name: "Jasper Thompson",
  },
];

const newImage = document.getElementById("user-img");
const newComment = document.getElementById("user-cm");
const newName = document.getElementById("user-name");

function userData(user) {
  newImage.src = user.img;
  newComment.textContent = user.comments;
  newName.textContent = user.name;
}
document.addEventListener("DOMContentLoaded", function () {
  const userOne = NewComments[0];
  userData(userOne);
});

let currentUser = 0;

////button actions///
document.getElementById("next-btn-cm").addEventListener("click", function () {
  if ((currentUser >= 0, currentUser < NewComments.length - 1)) {
    currentUser++;
    userData(NewComments[currentUser]);
  } else if (currentUser >= NewComments.length - 1) {
    currentUser = 0;
    userData(NewComments[currentUser]);
  }
});

document.getElementById("back-btn-cm").addEventListener("click", function () {
  if (currentUser > 0) {
    currentUser--;
    userData(NewComments[currentUser]);
  } else {
    currentUser = NewComments.length - 1;
    userData(NewComments[currentUser]);
  }
});

//////////form actions///

function addSubmit() {
  var email = document.getElementById("email");
  var filter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(email.value)) {
    alert("Please provide a valid email address");
    document.getElementById("email").value = "";
    return false;
  }

  document.getElementById("email").style.display = "none";
  document.getElementById("thank-box").style.display = "block";
  document.getElementById("submit-btn").style.display = "none";
}
