const loginForm = document.querySelector(".login-form");
// варіант №1
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Enter all props!");
  }

  const enteredData = {
    email: email.value,
    password: password.value,
  };
  console.log(enteredData);

  event.currentTarget.reset();
}

// варіант №2
// loginForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const formData = new FormData(loginForm);
//     const data = {};

//     formData.forEach((value, key) => {
//         data[key] = value;
//         if (value.length > 0) {
//             e.target.reset();
//         } else {
//             alert('Enter all props!')
//         }
//     })
//     console.log(data);
// })
