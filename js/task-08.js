const loginForm = document.querySelector('.login-form');
// варіант №1
loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) { 
    event.preventDefault();
    const {
        elements: { email, password } } = event.currentTarget;
    
    if (email.value === '' || password.value === '') { 
        return alert('Enter all props!');
    }
    
    console.log(`Email: ${email.value}, Password: ${password.value}`);
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