const fieldInput = document.querySelector("#name-input");
let inputValue = document.querySelector("#name-output");

fieldInput.addEventListener("input", inputName);

function inputName(event) {
  const element = event.target;
  const normalizedInputValue = element.value.trim();
  if (normalizedInputValue === "" || event.target.value === " ") {
    return (inputValue.textContent = "Anonymous");
  } else {
    return (inputValue.textContent = normalizedInputValue);
  }
}
