function reloadStorePage() {
    const currentUrl = window.location.href;


    if (currentUrl.includes('Library.html')) {
        window.location.reload();
    } else {
        window.location.href = 'Library.html';
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

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleIcon.innerHTML = '<i class="fas fa-lightbulb"></i>'; // Icon for dark mode
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleIcon.innerHTML = '<i class="far fa-lightbulb"></i>'; // Icon for light mode
    }
}

function showGameInfo(game) {
    document.addEventListener('DOMContentLoaded', function () {
        document.body.classList.add('dark-theme');
    });

    const gameInfoContainer = document.getElementById('game-info');
    let gameInfo = '';

    switch (game) {
        case 'game1':
            gameInfo = `
                <h2>Cyberpunk 2077</h2>
                <img src="Assets/cyb_wall.png" alt="Cyberpunk 2077">
                <div class="game-actions">
                    <button class="play-button">Play</button>
                    <div class="game-details">
                        <p><strong>Last Played:</strong> 25-Oct-2024</p>
                        <p><strong>Hours Spent:</strong> 42 hrs</p>
                        <p><strong>Achievements:</strong> <span class="achievements-badge">21/30</span></p>
                    </div>
                </div>
                <p><strong>Developer:</strong> CD Projekt Red</p>
                <p><strong>Genre:</strong> Action RPG</p>
                <p><strong>Description:</strong> Set in the dystopian Night City, explore the open world as V, a mercenary with customizable cybernetic implants and weaponry.</p>
            `;
            break;
        case 'game2':
            gameInfo = `
                <h2>Red Dead Redemption 2</h2>
                <img src="Assets/rdr_wall.png" alt="Red Dead Redemption 2">
                <div class="game-actions">
                    <button class="play-button">Play</button>
                    <div class="game-details">
                        <p><strong>Last Played:</strong> 22-Oct-2024</p>
                        <p><strong>Hours Spent:</strong> 65 hrs</p>
                        <p><strong>Achievements:</strong> <span class="achievements-badge">40/60</span></p>
                    </div>
                </div>
                <p><strong>Developer:</strong> Rockstar Games</p>
                <p><strong>Genre:</strong> Action, Adventure</p>
                <p><strong>Description:</strong> Immerse yourself in an epic story of outlaws on the run, set in a stunningly realistic and interactive world in the final years of America's Wild West.</p>
            `;
            break;
        case 'game3':
            gameInfo = `
                <h2>The Witcher 3</h2>
                <img src="Assets/w3_wall.jpg" alt="The Witcher 3">
                <div class="game-actions">
                    <button class="play-button">Play</button>
                    <div class="game-details">
                        <p><strong>Last Played:</strong> 18-Oct-2024</p>
                        <p><strong>Hours Spent:</strong> 70 hrs</p>
                        <p><strong>Achievements:</strong> <span class="achievements-badge">55/78</span></p>
                    </div>
                </div>
                <p><strong>Developer:</strong> CD Projekt Red</p>
                <p><strong>Genre:</strong> RPG</p>
                <p><strong>Description:</strong> Step into the shoes of Geralt of Rivia, a professional monster hunter, in this story-driven open world game set in a visually stunning fantasy universe.</p>
            `;
            break;
        case 'game4':
            gameInfo = `
                <h2>Assassin's Creed Valhalla</h2>
                <img src="Assets/acv_wall.jpg" alt="Assassin's Creed Valhalla">
                <div class="game-actions">
                    <button class="play-button">Play</button>
                    <div class="game-details">
                        <p><strong>Last Played:</strong> 15-Oct-2024</p>
                        <p><strong>Hours Spent:</strong> 55 hrs</p>
                        <p><strong>Achievements:</strong> <span class="achievements-badge">34/50</span></p>
                    </div>
                </div>
                <p><strong>Developer:</strong> Ubisoft</p>
                <p><strong>Genre:</strong> Action, Adventure</p>
                <p><strong>Description:</strong> Become Eivor, a legendary Viking warrior, in a story-rich open-world game set during the Viking invasion of England.</p>
            `;
            break;
        case 'game5':
            gameInfo = `
                <h2>Ghost of Tsushima</h2>
                <img src="Assets/gst_wallpaper.png" alt="Ghost of Tsushima">
                <div class="game-actions">
                    <button class="play-button">Play</button>
                    <div class="game-details">
                        <p><strong>Last Played:</strong> 10-Oct-2024</p>
                        <p><strong>Hours Spent:</strong> 48 hrs</p>
                        <p><strong>Achievements:</strong> <span class="achievements-badge">27/40</span></p>
                    </div>
                </div>
                <p><strong>Developer:</strong> Sucker Punch Productions</p>
                <p><strong>Genre:</strong> Action, Adventure</p>
                <p><strong>Description:</strong> Explore the open world of Tsushima Island in feudal Japan, and become the Ghost as you fight for freedom against the Mongol Empire.</p>
            `;
            break;
        case 'game6':
            gameInfo = `
                <h2>Hades</h2>
                <img src="Assets/hades_wallpaper.png" alt="Hades">
                <div class="game-actions">
                    <button class="play-button">Play</button>
                    <div class="game-details">
                        <p><strong>Last Played:</strong> 02-Oct-2024</p>
                        <p><strong>Hours Spent:</strong> 35 hrs</p>
                        <p><strong>Achievements:</strong> <span class="achievements-badge">19/25</span></p>
                    </div>
                </div>
                <p><strong>Developer:</strong> Supergiant Games</p>
                <p><strong>Genre:</strong> Roguelike, Action</p>
                <p><strong>Description:</strong> Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler.</p>
            `;
            break;
        case 'game7':
            gameInfo = `
                <h2>Doom Eternal</h2>
                <img src="Assets/de_wall.jpg" alt="Doom Eternal">
                <div class="game-actions">
                    <button class="play-button">Play</button>
                    <div class="game-details">
                        <p><strong>Last Played:</strong> 28-Sep-2024</p>
                        <p><strong>Hours Spent:</strong> 40 hrs</p>
                        <p><strong>Achievements:</strong> <span class="achievements-badge">30/35</span></p>
                    </div>
                </div>
                <p><strong>Developer:</strong> id Software</p>
                <p><strong>Genre:</strong> FPS</p>
                <p><strong>Description:</strong> Experience the ultimate combination of speed and power as you rip and tear through Hell’s armies.</p>
            `;
            break;
        case 'game8':
            gameInfo = `
                <h2>Hollow Knight</h2>
                <img src="Assets/hkn_wall.png" alt="Hollow Knight">
                <div class="game-actions">
                    <button class="play-button">Play</button>
                    <div class="game-details">
                        <p><strong>Last Played:</strong> 22-Sep-2024</p>
                        <p><strong>Hours Spent:</strong> 60 hrs</p>
                        <p><strong>Achievements:</strong> <span class="achievements-badge">40/45</span></p>
                    </div>
                </div>
                <p><strong>Developer:</strong> Team Cherry</p>
                <p><strong>Genre:</strong> Action, Metroidvania</p>
                <p><strong>Description:</strong> Explore the vast interconnected world of Hallownest in this atmospheric action-adventure game.</p>
            `;
            break;
        case 'game9':
            gameInfo = `
                <h2>Elden Ring</h2>
                <img src="Assets/er_wall.jpg" alt="Elden Ring">
                <div class="game-actions">
                    <button class="play-button">Play</button>
                    <div class="game-details">
                        <p><strong>Last Played:</strong> 15-Sep-2024</p>
                        <p><strong>Hours Spent:</strong> 80 hrs</p>
                        <p><strong>Achievements:</strong> <span class="achievements-badge">50/60</span></p>
                    </div>
                </div>
                <p><strong>Developer:</strong> FromSoftware</p>
                <p><strong>Genre:</strong> Action RPG</p>
                <p><strong>Description:</strong> Explore the Lands Between, a fantasy world where the mighty Elden Ring has been shattered, and seek to restore it as the Elden Lord.</p>
            `;
            break;
        default:
            gameInfo = `
                <h2>Select a game to view details</h2>
                <p>Click on any game from the list to see its information here.</p>
            `;
    }

    gameInfoContainer.innerHTML = gameInfo;
}