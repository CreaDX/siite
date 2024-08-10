// Create the map
var map = L.map('map').setView([40, -74], 12);

// Add a tile layer (e.g. OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);

// Create a circle marker with meter-based rendering
var circle = L.circle([40, -74], {
  radius: 1, // initial radius in meters (will be multiplied by 1000)
  color: 'red',
  fillColor: 'red',
  fillOpacity: 0.5,
  opacity: 0.5, // make it semi-transparent (faded)
}).addTo(map);

// Teleport the circle to the point where the mouse was clicked
map.on('click', function(e) {
  circle.setLatLng(e.latlng);
  console.log(`Circle teleported to: ${e.latlng.lat}, ${e.latlng.lng}`);
});

// Update circle radius based on textbox value
document.getElementById('update-radius-btn').addEventListener('click', function() {
  var radiusInput = document.getElementById('radius-input');
  var newRadius = parseInt(radiusInput.value, 10) * 1000; // multiply by 1000
  circle.setRadius(newRadius);
  console.log(`Circle radius updated to: ${newRadius}m`);
});
