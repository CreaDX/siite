// Create the map
var map = L.map('map').setView([40, -74], 12);

// Add a tile layer (e.g. OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);

// Create a circle marker with pixel-based rendering
var circle = L.circleMarker([40, -74], {
  radius: 40, // initial radius in pixels
  color: 'red',
  fillColor: 'red',
  fillOpacity: 0.5,
  opacity: 0.5, // make it semi-transparent (faded)
  renderer: L.canvas() // use pixel-based rendering
}).addTo(map);

// Teleport the circle to the point where the mouse was clicked
map.on('click', function(e) {
  circle.setLatLng(e.latlng);
  console.log(`Circle teleported to: ${e.latlng.lat}, ${e.latlng.lng}`);
});

// Adjust circle radius based on map zoom level
map.on('zoomend', function() {
  var zoomLevel = map.getZoom();
  var radius = 40 * Math.pow(2, 12 - zoomLevel); // adjust radius based on zoom level
  circle.setRadius(radius);
  console.log(`Circle radius adjusted to: ${radius}px`);
});
