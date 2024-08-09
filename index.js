$(document).ready(function() {
  const map = new jvm.WorldMap({
    container: $('#map'),
    backgroundColor: 'transparent',
    markerStyle: {
      initial: {
        fill: '#4CAF50',
        strokeWidth: 2,
        stroke: '#fff',
        r: 5
      }
    },
    markers: [],
    onRegionTipShow: function(e, el, code) {
      el.html(el.html() + '<br>Country Code: ' + code);
    }
  });

  const smallCircleBtn = document.getElementById('small-circle-btn');
  const mediumCircleBtn = document.getElementById('medium-circle-btn');
  const largeCircleBtn = document.getElementById('large-circle-btn');

  smallCircleBtn.addEventListener('click', () => {
    const lat = Math.random() * 180 - 90;
    const lon = Math.random() * 360 - 180;
    map.addMarker([lat, lon], {
      fill: '#4CAF50',
      strokeWidth: 2,
      stroke: '#fff',
      r: 5
    });
  });

  mediumCircleBtn.addEventListener('click', () => {
    const lat = Math.random() * 180 - 90;
    const lon = Math.random() * 360 - 180;
    map.addMarker([lat, lon], {
      fill: '#4CAF50',
      strokeWidth: 2,
      stroke: '#fff',
      r: 10
    });
  });

  largeCircleBtn.addEventListener('click', () => {
    const lat = Math.random() * 180 - 90;
    const lon = Math.random() * 360 - 180;
    map.addMarker([lat, lon], {
      fill: '#4CAF50',
      strokeWidth: 2,
      stroke: '#fff',
      r: 15
    });
  });
});
