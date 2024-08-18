var map = L.map('map').setView([57.634, -339.621], 6);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark-all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: ['a', 'b', 'c'],
    maxZoom: 19
}).addTo(map);

// Add fullscreen control
map.addControl(new L.Control.Fullscreen());

// Add zoom controls
L.easyButton('fa-chevron-up', function(btn, map){
    map.zoomIn();
}).addTo(map);

L.easyButton('fa-chevron-down', function(btn, map){
    map.zoomOut();
}).addTo(map);

// Add reset button
L.easyButton('fa-home', function(btn, map){
    map.setView([57.634, -339.621], 6);
}).addTo(map);
// ...

// ...

// play intro video for 7 seconds after page reload
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("intro-video");
    video.play();
    video.requestFullscreen(); // make it full screen

    setTimeout(function() {
        video.style.display = "none"; // hide it after 7 seconds
        document.exitFullscreen(); // exit full screen mode
    }, 7000); // 7 seconds
});

// make video full screen
video.addEventListener("click", function() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
});
