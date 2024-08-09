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
  map.addMarker(map.getMarkerLatLng(Math.random() * 180 - 90, Math.random() * 360 - 180), {
    fill: '#4CAF50',
    strokeWidth: 2,
    stroke: '#fff',
    r: 5
  });
});

mediumCircleBtn.addEventListener('click', () => {
  map.addMarker(map.getMarkerLatLng(Math.random() * 180 - 90, Math.random() * 360 - 180), {
    fill: '#4CAF50',
    strokeWidth: 2,
    stroke: '#fff',
    r: 10
  });
});

largeCircleBtn.addEventListener('click', () => {
  map.addMarker(map.getMarkerLatLng(Math.random() * 180 - 90, Math.random() * 360 - 180), {
    fill: '#4CAF
