

const expressions = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$/,
  firstName: /^[a-zA-ZÀ-ÿ'_.-\s]{1,40}$/,
  lastName: /^[a-zA-ZÀ-ÿ'_.-\s]{1,40}$/,
};

// const emptySpacesError = document.getElementById("empty_space_error");

const noFull = () => {
  const formName = document.getElementById("myform");
  console.log(formName)
  const inputs = document.querySelectorAll("#myform input");
  console.log(inputs)
  // switch (formName) {
  //   case "email":
  //     if (expressions.email.test(e.target.value)) {
  //     } else {
  //       document.getElementById("email_group").classList.remove("hidden");
  //       return false;
  //     }
  //     break;
  //   case "password":
  //     if(e.target.value.length < 10) return false 
  //     break;
  //   case "firstName":
  //     break;
  //   case "lastName":
  //     break;
  




  return false
  // switch (e.target.name) {
  //   case "email":
  //     if (expressions.email.test(e.target.value)) {
  //     } else {
  //       document.getElementById("email_group").classList.remove("hidden");
  //       return false;
  //     }
  //     break;
  //   case "password":
  //     if(e.target.value.length < 10) return false 
  //     break;
  //   case "firstName":
  //     break;
  //   case "lastName":
  //     break;
  // }
};

// const emptySpaces = () => {};

// inputs.forEach((input) => {
//   input.addEventListener("keyup", emptySpaces);
//   input.addEventListener("blur", emptySpaces);
// });

