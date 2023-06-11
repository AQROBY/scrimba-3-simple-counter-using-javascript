let homeScore = 0
let guestScore = 0

let home = document.getElementById("home");
let guest = document.getElementById("guest")

home.textContent = homeScore;
guest.textContent = guestScore

function increaseOneHome() {
    homeScore = homeScore + 1;
    home.textContent = homeScore;
}

function increaseTwoHome() {
    homeScore = homeScore + 2;
    home.textContent = homeScore;
}

function increaseThreeHome() {
    homeScore = homeScore + 3;
    home.textContent = homeScore;
}

function increaseOneGuest() {
    guestScore = guestScore + 1;
    guest.textContent = guestScore;
}

function increaseTwoGuest() {
    guestScore = guestScore + 2;
    guest.textContent = guestScore;
}

function increaseThreeGuest() {
    guestScore = guestScore + 3;
    guest.textContent = guestScore;
}

function startNewGame() {
    guestScore = 0;
    guest.textContent = guestScore;
    homeScore = 0;
    home.textContent = homeScore;
}