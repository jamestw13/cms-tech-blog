// SIGNUP
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  console.log(username, password);

  if (username.length > 3 && username.length <= 20 && password.length > 3 && password.length <= 20) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {'Content-type': 'application/json'},
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  } else {
    alert('Username and password must be between 4 and 20 characters long');
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

// LOGIN
async function loginFormHandler(event) {
  event.preventDefault();
  console.log('triggered');

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {'Content-type': 'application/json'},
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
