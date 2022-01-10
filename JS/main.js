const grids = document.querySelectorAll("#hex-grid");

grids.forEach((grid, index) => {
  const light = grid.getElementsByClassName("light").item(0);
  grid.addEventListener("mousemove", (e) => {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
  });
  grid.addEventListener("scroll", (e) => {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
  });
});
