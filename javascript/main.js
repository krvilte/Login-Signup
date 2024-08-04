const login = document.querySelector('#login-btn');
const email = document.querySelector('#login-email-field');
const password = document.querySelector('#login-password-field');

login.addEventListener('click', (e) => {
  // e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Email Input Validation
  if (emailValue === '') {
    setError(email, 'Enter email address');
    validateEmail(emailValue);
  } else if (!validateEmail(emailValue)) {
    setError(email, 'Enter a valid email address');
  } else {
    setError(email, '');
  }

  //Password Input Validation
  if (passwordValue === '') {
    setError(password, 'Enter password');
  }
}

//Validate Email
function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return pattern.test(email);
}

//Error Message
function setError(input, message) {
  const small = input.nextElementSibling;

  small.innerText = message;
  small;
}
