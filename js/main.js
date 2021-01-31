let formBtn = document.getElementById("form-btn");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let menuButton = document.getElementById("menu-button");
let navContent = document.getElementById("nav-content");

formBtn.addEventListener("click", () => {
  name.value = "";
  email.value = "";
  message.value = "";
  //   console.log("button clicked");
});

menuButton.addEventListener("click", () => {
  // console.log("button-clicked")
  if (!navContent.classList.contains("nav-content-visible")) {
    navContent.classList.add("nav-content-visible");
  } else {
    navContent.classList.remove("nav-content-visible");
  }
});

function closeNavMenu() {
  console.log("nav menu clikced");
  if (navContent.classList.contains("nav-content-visible")) {
    navContent.classList.remove("nav-content-visible");
  }
}

// Get the navbar
let navbar = document.getElementById("navbar");
let home = document.getElementById("home");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
console.log(about.offsetHeight, "contact")
// console.log(navbar, "navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop+50;
// console.log(sticky, "sticker");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function fixedNav() {
//   console.log("window scrolling")
//   console.log(window.pageYOffset, "offset");

  
// }

window.addEventListener("scroll", ()=> {
  // console.log("window scrolled")
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset >= home.offsetTop  && window.pageYOffset < home.offsetTop + home.offsetHeight) {
    document.getElementById("nav-home").classList.add("active");
  } else {
    document.getElementById("nav-home").classList.remove("active");
  }
  if (window.pageYOffset >= about.offsetTop  && window.pageYOffset < about.offsetTop + about.offsetHeight) {
    document.getElementById("nav-about").classList.add("active");
  } else {
    document.getElementById("nav-about").classList.remove("active");
  }
  if (window.pageYOffset >= projects.offsetTop  && window.pageYOffset < projects.offsetTop + projects.offsetHeight) {
    document.getElementById("nav-projects").classList.add("active");
  } else {
    document.getElementById("nav-projects").classList.remove("active");
  }
  if (window.pageYOffset >= contact.offsetTop  && window.pageYOffset < contact.offsetTop + contact.offsetHeight) {
    document.getElementById("nav-contact").classList.add("active");
  } else {
    document.getElementById("nav-contact").classList.remove("active");
  }
})

var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var elementsToShowLeft = document.querySelectorAll(".show-on-scroll-left");
var elementsToShowRight = document.querySelectorAll(".show-on-scroll-right");

function loop() {
  elementsToShowLeft.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("animated-left");
    }
  });
  elementsToShowRight.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("animated-right");
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
