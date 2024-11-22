const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const mapImage = new Image();
mapImage.src = 'map.jpg'; // Load your texture

// Function to draw the map
function drawMap() {
    // Draw the texture on the canvas
    ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
}

// Draw the map once the image has loaded
mapImage.onload = drawMap;
