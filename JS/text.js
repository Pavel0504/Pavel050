var wrapper = document.querySelector(".wrapper");
var text = document.querySelector(".text");
const opens = document.querySelectorAll(".open");
const modal = document.querySelector(".modals");
const closes = document.querySelectorAll(".close");
const card = document.querySelector(".card");

var textCont = text.textContent;
text.style.display = "none";

opens.forEach((open) =>
  open.addEventListener("click", () => {
    modal.classList.toggle("active");
    for (var i = 0; i < textCont.length; i++) {
      (function (i) {
        setTimeout(function () {
          // Created textNode to append
          var texts = document.createTextNode(textCont[i]);
          var span = document.createElement("span");
          span.appendChild(texts);

          span.classList.add("wave");
          wrapper.appendChild(span);
        }, 75 * i);
      })(i);
    }
  })
);

closes.forEach((close) =>
  close.addEventListener("click", () => {
    card.style.display = "none";
  })
);
