const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const navBar = document.querySelector("header"),
  menuBtns = document.querySelectorAll(".menu-icon");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

document.addEventListener("click", function (event) {
  var clickedElement = event.target;

  if (clickedElement == navBar || navBar.contains(clickedElement)) {
    return;
  }
  navBar.classList.remove("open");
});

const toTop = document.querySelector(".to-top");


window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    slidesPerView: 6,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: true, // Enable keyboard navigation
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
    },
  });
});

function onlyOne(check) {
  var checkbox = document.getElementsByName('check')
  checkbox.forEach((item) => {
    if (item !== check) item.checked = false
  })
}

function onlyOneit(check) {
  var checkitbox = document.getElementsByName('checkit')
  checkitbox.forEach((item) => {
    if (item !== check) item.checked = false
  })
}

