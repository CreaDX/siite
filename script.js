const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const mapImage = new Image();
mapImage.src = 'map.jpg'; // Load your texture

// Tank properties
const tank = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 40,
    height: 20,
    speed: 5,
    bullets: []
};

// Bullet properties
const bullet = {
    width: 5,
    height: 5,
    speed: 10
};

// Function to draw the map
function drawMap() {
    ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
}

// Function to draw the tank
function drawTank() {
    ctx.fillStyle = 'green';
    ctx.fillRect(tank.x, tank.y, tank.width, tank.height);
}

// Function to draw bullets
function drawBullets() {
    ctx.fillStyle = 'red';
    tank.bullets.forEach(b => {
        ctx.fillRect(b.x, b.y, bullet.width, bullet.height);
    });
}

// Update the position of bullets
function updateBullets() {
    tank.bullets.forEach(b => {
        b.y -= bullet.speed; // Move bullet up
    });
    // Remove bullets that are off-screen
    tank.bullets = tank.bullets.filter(b => b.y > 0);
}

// Handle keydown events
const keys = {};
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Update the game state
function update() {
    // Move tank
    if (keys['w'] && tank.y > 0) tank.y -= tank.speed; // Move up
    if (keys['s'] && tank.y < canvas.height - tank.height) tank.y += tank.speed; // Move down
    if (keys['a'] && tank.x > 0) tank.x -= tank.speed; // Move left
    if (keys['d'] && tank.x < canvas.width - tank.width) tank.x += tank.speed; // Move right

    // Shooting bullets
    if (keys[' ']) {
        tank.bullets.push({ x: tank.x + tank.width / 2 - bullet.width / 2, y: tank.y });
        keys[' '] = false; // Prevent multiple bullets
    }

    updateBullets();
}

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawMap();
    drawTank();
    drawBullets();
    update();
    requestAnimationFrame(gameLoop); // Loop the game
}

// Draw the map once the image has loaded
mapImage.onload = () => {
    gameLoop(); // Start the game loop
};
