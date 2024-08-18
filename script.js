document.addEventListener("DOMContentLoaded", function() {
  // Create the map
  var map = L.map('map').setView([40, -74], 12);

  // Add a dark-themed tile layer (Carto Dark Matter)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: ['a', 'b', 'c']
  }).addTo(map);

  // Create a circle marker with meter-based rendering
  var circle = L.circle([40, -74], {
    radius: 536, // initial radius in meters (added 536 and multiplied by 1000)
    color: 'white', // change the circle color to white for better visibility
    fillColor: 'white',
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
    var newRadius = (parseInt(radiusInput.value, 10) + 536) * 1000; // add 536 and then multiply by 1000
    circle.setRadius(newRadius);
    console.log(`Circle radius updated to: ${newRadius}m`);
  });
});
