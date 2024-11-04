const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!terms) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    console.log('Signup form submitted');
    // Logic for backend signup process can be added here
});
