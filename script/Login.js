function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const enteredUsernameEmail = document.getElementById('username-email').value.trim().toLowerCase();
    const enteredPassword = document.getElementById('password').value.trim();

    const storedUsername = getCookie('username') ? getCookie('username').toLowerCase() : null;
    const storedEmail = getCookie('email') ? getCookie('email').toLowerCase() : null;
    const storedPassword = getCookie('password');

    console.log('Entered Username/Email:', enteredUsernameEmail);
    console.log('Entered Password:', enteredPassword);
    console.log('Stored Username:', storedUsername);
    console.log('Stored Email:', storedEmail);
    console.log('Stored Password:', storedPassword);

    if ((enteredUsernameEmail === storedUsername || enteredUsernameEmail === storedEmail) &&
        enteredPassword === storedPassword) {
        window.location.href = 'Store.html';
    } else {
        alert('Invalid username/email or password');
    }
});

function toggleTheme() {
    const body = document.body;
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