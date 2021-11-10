// Carousel products

const prev = document.querySelector(".prev");

const next = document.querySelector(".next");

const track = document.querySelector(".track");

const card = document.querySelector(".card");

const bodyColor = document.querySelector("body");

let windowWidth = window.innerWidth;

let carouselWidth = document.querySelector(".carousel-inner").clientWidth;

let index = 0;

window.addEventListener("resize", () => {
  carouselWidth = document.querySelector(".carousel-container").offsetWidth;
  track.style.transform = `translateX(-${index * carouselWidth}px)`;

  console.log(carouselWidth);

  adjustItemsOnResize();

  function adjustItemsOnResize() {
    if (carouselWidth > 457 && index > 5) {
      index = 5;
    } else if (carouselWidth > 790 && index === 5) {
      index = 3;
    } else if (carouselWidth > 1121 && index === 3) {
      index--;
    }
  }

  showBtnOnResize();

  function showBtnOnResize() {
    if (carouselWidth < 459 && index < 11) {
      next.classList.remove("hide");
    } else if (carouselWidth < 791 && index < 6) {
      next.classList.remove("hide");
    } else if (carouselWidth < 1121 && index < 3) {
      next.classList.remove("hide");
    } else if (carouselWidth >= 1121 && index >= 2) {
      next.classList.add("hide");
    }
  }
});

next.addEventListener("click", () => {
  index++;
  prev.classList.add("show");
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  console.log(index);
  if (carouselWidth > 1002 && index === 2) {
    next.classList.add("hide");
    // bodyColor.style.background = "#0f0";
  } else if (carouselWidth >= 791 && index === 3) {
    next.classList.add("hide");
  } else if (carouselWidth >= 459 && index === 5) {
    next.classList.add("hide");
  } else if (carouselWidth <= 459 && index === 11) {
    next.classList.add("hide");
  }
});

prev.addEventListener("click", () => {
  index--;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  console.log(index);
});
