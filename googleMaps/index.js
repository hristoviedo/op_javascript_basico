let marker, map;

function initMap() {
  const position = {
    lat: 59.44,
    lng: 24.75,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
  });

  marker = new google.maps.Marker({
    position,
    map,
    title: "Posición Inicial",
  });

  geoPosiciona();
}

function geoPosiciona() {
  if (!navigator.geolocation) {
    alert("Tu navegador no admite geolocalización");
  } else {
    const geoLoc = navigator.geolocation;
    const options = { timeout: 60000 };
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };

  marker.setPosition(nuevaPos);
  map.setCenter(nuevaPos);
}

function onError(error) {
  console.log(error);
}
