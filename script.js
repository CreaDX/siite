const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Function to draw the map
function drawMap() {
    // Set a blank background
    ctx.fillStyle = '#f0f0f0'; // Light grey background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // You can add more elements to the map here
    // For example, drawing obstacles or terrain features
}

// Initial draw
drawMap();
