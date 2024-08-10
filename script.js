// Create the map
var map = L.map('map').setView([40, -74], 12);

// Add a tile layer (e.g. OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);

// Create a circle marker with pixel-based rendering
var circle = L.circleMarker([40, -74], {
  radius: 10, // radius in pixels
  color: 'red',
  fillColor: 'red',
  fillOpacity: 0.5,
  opacity: 0.5, // make it semi-transparent (faded)
  draggable: true, // allow dragging
  renderer: L.canvas() // use pixel-based rendering
}).addTo(map);

// Update the circle's position on drag
circle.on('drag', function() {
  var latlng = circle.getLatLng();
  console.log(`Circle moved to: ${latlng.lat}, ${latlng.lng}`);
});
