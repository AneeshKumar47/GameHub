function reloadStorePage() {
    const currentUrl = window.location.href;

    if (currentUrl.includes('Store.html')) {
        window.location.reload();
    } else {
        window.location.href = 'Store.html';
    }
}

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

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function checkLoginStatus() {
    const username = getCookie('username');
    const loginNav = document.getElementById('loginNav');

    if (username) {
        loginNav.innerHTML = '<a class="nav-link" href="#" onclick="logout()">Log Out</a>';
    } else {
        loginNav.innerHTML = '<a class="nav-link" href="login.html">Log In</a>';
    }
}

function logout() {
    // deleteCookie('username');
    // deleteCookie('email');
    // deleteCookie('password');

    window.location.href = 'login.html';
}

window.onload = checkLoginStatus;

window.onload = checkLoginStatus;
function toggleTheme() {
    const body = document.body;
    const themeToggleIcon = document.getElementById('themeToggleIcon');

    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleIcon.innerHTML = '<i class="far fa-lightbulb"></i>';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleIcon.innerHTML = '<i class="fas fa-lightbulb"></i>';
    }
}