let map;
let circleMarker;

function initMap() {
    map = L.map('map').setView([37.7749, -122.4194], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(map);

    // Add a click event listener to the map
    map.on('click', function(e) {
        // Remove any existing circle marker
        if (circleMarker) {
            map.removeLayer(circleMarker);
        }

        // Create a new circle marker at the clicked location
        circleMarker = L.circleMarker(e.latlng, {
            radius: 10,
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.5
        }).addTo(map);
    });
}

// Call the initMap function when the page loads
document.addEventListener('DOMContentLoaded', initMap);
