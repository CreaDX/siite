// Create the map
var map = L.map('map').setView([40, -74], 12);

// Add a tile layer (e.g. OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);

// Create a circle marker
var circle = L.circleMarker([40, -74], {
  radius: 10, // initial radius
  color: 'red',
  fillColor: 'red',
  fillOpacity: 0.5
}).addTo(map);

// Update the circle's radius on zoom
map.on('zoomend', function() {
  var zoomLevel = map.getZoom();
  var radius = 10 * (1 / Math.pow(2, zoomLevel - 12)); // adjust radius based on zoom level
  circle.setRadius(radius);
});
