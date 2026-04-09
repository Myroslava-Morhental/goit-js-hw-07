const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const backgroundColorEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor() {
  let randomColor = getRandomHexColor();
  backgroundColorEl.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;
}
