function toggleTheme() {
    const body = document.body;
    const signupContainer = document.querySelector('.signup-container');
    const themeToggleIcon = document.getElementById('themeToggleIcon');

    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleIcon.classList.remove('fas', 'fa-lightbulb');
        themeToggleIcon.classList.add('far', 'fa-lightbulb');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleIcon.classList.remove('far', 'fa-lightbulb');
        themeToggleIcon.classList.add('fas', 'fa-lightbulb');
    }
}

document.getElementById('username').addEventListener('input', function () {
    validateUsername();
});

document.getElementById('name').addEventListener('input', function () {
    validateName();
});

document.getElementById('mobile').addEventListener('input', function () {
    validateMobile();
});

document.getElementById('email').addEventListener('input', function () {
    validateEmail();
});

document.getElementById('password').addEventListener('input', function () {
    validatePassword();
});

document.getElementById('confirmPassword').addEventListener('input', function () {
    validateConfirmPassword();
});

function validateUsername() {
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    const usernameRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (username === "") {
        usernameError.style.display = 'none';
    } else if (!usernameRegex.test(username)) {
        usernameError.classList.remove('valid-message');
        usernameError.classList.add('error-message');
        usernameError.style.display = 'block';
    } else {
        usernameError.classList.remove('error-message');
        usernameError.classList.add('valid-message');
        usernameError.style.display = 'block';
    }
}

function validateName() {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[A-Za-z\s]+$/;

    if (name === "") {
        nameError.style.display = 'none';
    } else if (!nameRegex.test(name)) {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
}

function validateMobile() {
    const mobile = document.getElementById('mobile').value;
    const mobileError = document.getElementById('mobileError');
    const mobileRegex = /^\d{10}$/;

    if (mobile === "") {
        mobileError.style.display = 'none';
    } else if (!mobileRegex.test(mobile)) {
        mobileError.style.display = 'block';
    } else {
        mobileError.style.display = 'none';
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.style.display = 'none';
    } else if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (password === "") {
        passwordError.style.display = 'none';
    } else if (!passwordRegex.test(password)) {
        passwordError.classList.remove('valid-message');
        passwordError.classList.add('error-message');
        passwordError.style.display = 'block';
    } else {
        passwordError.classList.remove('error-message');
        passwordError.classList.add('valid-message');
        passwordError.style.display = 'block';
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if (confirmPassword === "") {
        confirmPasswordError.style.display = 'none';
    } else if (confirmPassword !== password) {
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }
}
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    console.log('Storing Username:', username);
    console.log('Storing Email:', email);
    console.log('Storing Password:', password);

    document.cookie = `username=${encodeURIComponent(username)}; max-age=${7 * 24 * 60 * 60}; path=/`;
    document.cookie = `email=${encodeURIComponent(email)}; max-age=${7 * 24 * 60 * 60}; path=/`;
    document.cookie = `password=${encodeURIComponent(password)}; max-age=${7 * 24 * 60 * 60}; path=/`;

    console.log('Cookies after setting:', document.cookie);

    window.location.href = 'login.html';
});