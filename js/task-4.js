const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", fillInForm);

function fillInForm(event) {
  event.preventDefault();
  const element = event.target.elements;
  const emailValue = element.email.value.trim();
  const passwordValue = element.password.value.trim();
  if (emailValue === "" || passwordValue === "") {
    return alert("All form fields must be filled in");
  }
  const formData = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formData);

  event.target.reset();
}
