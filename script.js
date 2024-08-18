let map;
let drawnItems;

document.addEventListener("DOMContentLoaded", function () {
  // Create the map
  map = L.map("map").setView([51.505, -0.09], 13);

  // Add a basemap layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ["a", "b", "c"],
  }).addTo(map);

  // Create a layer group for drawn items
  drawnItems = L.featureGroup().addTo(map);

  // Add a draw toolbar
  let drawControl = new L.Control.Draw({
    edit: {
      featureGroup: drawnItems,
    },
  }).addTo(map);

  // Add event listeners for draw events
  map.on(L.Draw.Event.CREATED, function (e) {
    let type = e.layerType,
      layer = e.layer;

    drawnItems.addLayer(layer);

    let drawButton = document.getElementById("draw-btn");
    drawButton.classList.remove("active");
    map.off("mousedown");
  });

  // Add event listener for draw button click
  let drawButton = document.getElementById("draw-btn");
  drawButton.addEventListener("click", function () {
    drawButton.classList.add("active");
    map.on("mousedown", function () {
      drawButton.classList.remove("active");
      map.off("mousedown");
    });
  });

  // Clear drawn items
  let clearButton = document.getElementById("clear-btn");
  clearButton.addEventListener("click", function () {
    drawnItems.clearLayers();
  });

  // Add video element
  let videoElement = document.getElementById("video");

  // Add event listener for video end
  videoElement.addEventListener("ended", function () {
    console.log("Video ended");
    videoElement.style.display = "none";
    document.getElementById("map").style.width = "100vw";
    document.getElementById("map").style.position = "absolute";
    document.getElementById("map").style.top = "0";
    document.getElementById("map").style.left = "0";
    document.getElementById("map").style.zIndex = "1000";
    document.body.style.overflow = "hidden";
  });

  // Add a timeout as a fallback
  videoElement.addEventListener("play", function () {
    setTimeout(function () {
      videoElement.style.display = "none";
      document.getElementById("map").style.width = "100vw";
      document.getElementById("map").style.position = "absolute";
      document.getElementById("map").style.top = "0";
      document.getElementById("map").style.left = "0";
      document.getElementById("map").style.zIndex = "1000";
      document.body.style.overflow = "hidden";
    }, 7000); // hide video after 7 seconds
  });
});
