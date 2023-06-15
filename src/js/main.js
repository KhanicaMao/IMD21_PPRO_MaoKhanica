var button = document.querySelector(".button");
var menu = document.querySelector(".menu");
var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);

var div = document.getElementById("menu");
var display = 0;

function hideShow() {
  if (display == 1) {
    div.style.display = "block";
    display = 0;
  } else {
    div.style.display = "none";
    display = "1";
  }
}
