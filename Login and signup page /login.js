const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example of basic validation (expand as needed)
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        console.log('Login form submitted');
        // Logic for backend login process can be added here
    }
};
