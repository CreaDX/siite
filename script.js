document.addEventListener("DOMContentLoaded", function() {
  // Create the map
  var map = L.map('map').setView([40, -74], 12);
  // Add a watercolor-themed tile layer (Stamen Watercolor)
  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, &copy; <a href="https://stamen.com/">Stamen</a>',
    subdomains: ['a', 'b', 'c'],
    ext: 'jpg'
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
  
  // Add video element
  var videoElement = document.getElementById('intro-video');
  videoElement.play();
  
  // Wait for the video to start playing before setting the timeout
  videoElement.addEventListener('playing', function() {
    setTimeout(function() {
      videoElement.pause();
      videoElement.style.display = 'none';
    }, 7000);
  });
  
  // Medium calculator functionality
  const num1Input = document.getElementById('num1-input');
  const num2Input = document.getElementById('num2-input');
  const addBtn = document.getElementById('add-btn');
  const subtractBtn = document.getElementById('subtract-btn');
  const multiplyBtn = document.getElementById('multiply-btn');
  const divideBtn = document.getElementById('divide-btn');
  const resultElement = document.getElementById('result');
  addBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 + num2;
    resultElement.textContent = `Result: ${result}`;
  });
  subtractBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 - num2;
    resultElement.textContent = `Result: ${result}`;
  });
  multiplyBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 * num2;
    resultElement.textContent = `Result: ${result}`;
  });
  divideBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (num2 !== 0) {
      const result = num1 / num2;
      resultElement.textContent = `Result: ${result}`;
    } else {
      resultElement.textContent = `Error: Division by zero!`;
    }
  });
  
  // Add drawing functionality
  const drawButton = document.getElementById('draw-btn');
  let drawingEnabled = false;
  let drawnItems = L.featureGroup().addTo(map);
  drawButton.addEventListener('click', () => {
    drawingEnabled = !drawingEnabled;
    if (drawingEnabled) {
      drawButton.classList.add('active');
      map.on('mousedown', (e) => {
        if (drawingEnabled) {
          const latlng = e.latlng;
          const marker = L.marker(latlng, {
            draggable: true,
          }).addTo(drawnItems);
        }
      });
    } else {
      drawButton.classList.remove('active');
      map.off('mousedown');
    }
  });
  
  // Add event listener to calculate button
  document.getElementById('calculate-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1-input').value);
    const num2 = parseFloat(document.getElementById('num2-input').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = `Result: ${result}`;
  });

  // Add event listener to clear button
  document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('num1-input').value = '';
    document.getElementById('num2-input').value = '';
    document.getElementById('result').textContent = '';
  });
});
