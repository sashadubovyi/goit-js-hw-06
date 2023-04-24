const inputElement = document.querySelector('#validation-input');
// console.log(inputElement);

inputElement.classList.add('validation-input')

inputElement.addEventListener('blur', e => {
    const value = e.target.value;
    // console.log(value);
    const dataLength = Number(inputElement.dataset.length);
    // console.log(dataLength);

    if (value.length === dataLength) {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
    } else { 
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
    }
})
 