let map;
let circleSize = 10; // default circle size

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 12,
  });

  // Add event listeners to buttons
  document.getElementById("small-circle-btn").addEventListener("click", () => {
    circleSize = 5;
  });
  document.getElementById("medium-circle-btn").addEventListener("click", () => {
    circleSize = 10;
  });
  document.getElementById("large-circle-btn").addEventListener("click", () => {
    circleSize = 15;
  });

  // Add click event listener to map
  map.addListener("click", (event) => {
    const latLng = event.latLng;
    const circle = new google.maps.Circle({
      center: latLng,
      radius: circleSize,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: map,
    });
  });
}
