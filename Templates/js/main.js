document.addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    formData.forEach((value, key) => localStorage.setItem(key, value));
    window.location.href = form.action;
});

window.addEventListener('DOMContentLoaded', () => {
    const fields = ['name', 'title', 'email', 'phone', 'skills', 'experience', 'education', 'projects', 'certifications'];
    fields.forEach(field => {
        if (document.getElementById(field)) {
            document.getElementById(field).textContent = localStorage.getItem(field);
        }
    });
});
