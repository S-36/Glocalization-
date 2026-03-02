import { savedLocations } from './global.js';
    var map = L.map('map', {
    center: [10.4219, -75.5381],
    zoom: 15,
    zoomControl: true,
    zoomAnimation: true,
    fadeAnimation: true,
    markerZoomAnimation: true,
    zoomSnap: 0.1,
    zoomDelta: 0.5,
    inertia: true,
    worldCopyJump: true
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // 
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');
    const googleMapsLink = document.getElementById('google-maps-link');
    const descriptionInput = document.getElementById('description');
    map.on('click', function(e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        latitudeInput.value = lat;
        longitudeInput.value = lng;
        googleMapsLink.href = 'https://www.google.com/maps?q=' + latitudeInput.value + ',' + longitudeInput.value ;

    });

    function saveLocation(){
    var location = {
    latitude: latitudeInput.value,
    longitude: longitudeInput.value,
    description: descriptionInput.value
    };
    savedLocations.push(location);
    sessionStorage.setItem('savedLocations', JSON.stringify(savedLocations));
    
    }

    // Exposer la función al scope global para que onclick pueda acceder
    window.saveLocation = saveLocation;
