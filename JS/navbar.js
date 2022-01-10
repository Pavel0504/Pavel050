const burgers = document.querySelectorAll(".burger");
const container = document.querySelector(".container");
const screens = document.querySelectorAll(".screen");
const footer = document.querySelector(".footer");
const linkv = document.querySelector(".links");

burgers.forEach((burger) =>
  burger.addEventListener("click", () => {
    container.classList.toggle("active");
    linkv.style.display = "flex";
  })
);

function replaceBg(id) {
  const Bg = document.getElementById(id);
  screens.forEach((screen) => {
    if (screen.id == id) return;
    screen.style.display = "none";
  });
  Bg.style.display = "block";
}

function changeBg() {
  const links = document.querySelectorAll(".link");

  links.forEach((link, index) => {
    link.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      replaceBg(e.target.dataset.link);
    });

    link.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.toggle("active");
      linkv.style.display = "none";
    });
  });

  screens.forEach((screen) => {
    screen.style.display = "none";
    screens[0].style.display = "block";
  });
}
changeBg();
