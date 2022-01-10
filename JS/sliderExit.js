const exit = document.querySelectorAll(".exit");
const containers = document.querySelector(".container");

exit.forEach((exit) =>
  exit.addEventListener("click", () => {
    containers.classList.toggle("active");
    linkv.style.display = "flex";
  })
);
