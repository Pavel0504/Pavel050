const grids = document.querySelectorAll("#hex-grid");

grids.forEach((grid, index) => {
  const light = grid.getElementsByClassName("light").item(0);
  grid.addEventListener("mousemove", (e) => {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + window.scrollY}px`;
  });
});
