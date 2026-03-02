import { savedLocations } from './global.js';

    var ubications = document.getElementById('ubications');
    
    savedLocations.forEach(element => {
        ubications.innerHTML += `<p>Descripcion de la ubicacion: ${element.description} || Lat: ${element.latitude} || Lng: ${element.longitude}</p>`;
    });

    
