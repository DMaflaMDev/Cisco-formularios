const form = document.querySelector("form");
const inputs = document.querySelectorAll("#form input");
const expressions = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$/,
  firstName: /^[a-zA-ZÀ-ÿ'_.-\s]{1,40}$/,
  lastName: /^[a-zA-ZÀ-ÿ'_.-\s]{1,40}$/,
};

// const emptySpacesError = document.getElementById("empty_space_error");

const noFull = (e) => {
  switch (e.target.name) {
    case "email":
      if (expressions.email.test(e.target.value)) {
      } else {
        document.getElementById("email_group").classList.remove("hidden");
      }
      break;
    case "password":
      break;
    case "firstName":
      break;
    case "lastName":
      break;
  }
};

const emptySpaces = () => {};

inputs.forEach((input) => {
  input.addEventListener("keyup", emptySpaces);
  input.addEventListener("blur", emptySpaces);
});
