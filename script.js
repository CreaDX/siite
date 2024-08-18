// Create the map
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);

// Apply custom map style
map.setStyle({
  "version": 8,
  "name": "Custom Dark Theme",
  "metadata": {},
  "sources": {},
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#282a2f" // --theme-bg
      }
    },
    {
      "id": "roads",
      "type": "line",
      "source": "openstreetmap",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#707682" // --theme-dark
      }
    },
    {
      "id": "buildings",
      "type": "fill",
      "source": "openstreetmap",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#4e5159" // --theme-bg-hover
      }
    },
    {
      "id": "labels",
      "type": "symbol",
      "source": "openstreetmap",
      "layout": {
        "visibility": "visible",
        "text-field": "{name}",
        "text-size": 12
      },
      "paint": {
        "text-color": "#d4d4d5" // --theme-text
      }
    }
  ]
});

// Create the intro video
var introVideo = document.createElement('video');
introVideo.src = 'intro.mp4';
introVideo.autoplay = true;
introVideo.loop = true;
document.body.appendChild(introVideo);

// Create the calculator
var calculatorDiv = document.createElement('div');
calculatorDiv.innerHTML = `
  <h2>Calculator</h2>
  <input id="num1-input" type="number" value="0">
  <input id="num2-input" type="number" value="0">
  <button id="add-btn">+</button>
  <button id="subtract-btn">-</button>
  <button id="multiply-btn">*</button>
  <button id="divide-btn">/</button>
  <button id="calculate-btn">Calculate</button>
  <button id="clear-btn">Clear</button>
  <div id="result"></div>
`;
document.body.appendChild(calculatorDiv);


// Add event listeners to calculator buttons
document.getElementById('add-btn').addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1-input').value);
  const num2 = parseFloat(document.getElementById('num2-input').value);
  const result = num1 + num2;
  document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('subtract-btn').addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1-input').value);
  const num2 = parseFloat(document.getElementById('num2-input').value);
  const result = num1 - num2;
  document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('multiply-btn').addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1-input').value);
  const num2 = parseFloat(document.getElementById('num2-input').value);
  const result = num1 * num2;
  document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('divide-btn').addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1-input').value);
  const num2 = parseFloat(document.getElementById('num2-input').value);
  if (num2 === 0) {
    alert("Cannot divide by zero!");
  } else {
    const result = num1 / num2;
    document.getElementById('result').textContent = `Result: ${result}`;
  }
});

document.getElementById('calculate-btn').addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1-input').value);
  const num2 = parseFloat(document.getElementById('num2-input').value);
  const result = num1 + num2;
  document.getElementById('result').textContent = `Result: ${result}`;
});

document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('num1-input').value = '';
  document.getElementById('num2-input').value = '';
  document.getElementById('result').textContent = '';
});
