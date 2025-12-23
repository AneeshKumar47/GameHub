function reloadStorePage() {
    const currentUrl = window.location.href;


    if (currentUrl.includes('Cart.html')) {

        window.location.reload();
    } else {

        window.location.href = 'Cart.html';
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

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('dark-theme');
});

const gamePrices = {
    'game1': 24.99,
    'game2': 29.99,
    'game3': 59.99,
    'game4': 39.99
};

function removeGame(game) {
    const gameCard = document.getElementById(`${game}-card`);
    gameCard.remove();

    updateTotalAmount();
}

function updateTotalAmount() {
    let total = 0;
    let points = 0;

    for (const game in gamePrices) {
        if (document.getElementById(`${game}-card`)) {
            total += gamePrices[game];
            points += Math.floor(gamePrices[game]);
        }
    }

    document.getElementById('total-amount').textContent = `$${total.toFixed(2)}`;
    document.getElementById('points-earned').textContent = points;
}