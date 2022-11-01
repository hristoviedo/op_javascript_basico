let vancouver, madrid, tokyo, map;
vancouver = { lat: 49.246, lng: -123.116 };
madrid = { lat: 40.417, lng: -3.704 };
tokyo = { lat: 35.653, lng: 139.839 };
let favoritePos = [vancouver, madrid, tokyo];

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: randomPos(),
    zoom: 5,
  });

  const markerV = new google.maps.Marker({
    position: vancouver,
    map: map,
  });

  const markerM = new google.maps.Marker({
    position: madrid,
    map: map,
  });

  const markerT = new google.maps.Marker({
    position: tokyo,
    map: map,
  });
}

function randomPos() {
  const number = Math.floor(Math.random() * 3);
  return favoritePos[number];
}

window.initMap = initMap;
