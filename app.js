// Importar la biblioteca Axios
import axios from './node_modules/axios/dist/axios.min.js';

// Realizar la solicitud a la API utilizando Axios
axios.get('https://api.tvmaze.com/singlesearch/shows?q=house')
    .then(response => {
        const serieData = response.data;
        
        // Actualizar el contenido de los elementos HTML con la información de la serie
        document.getElementById('serie-title').textContent = serieData.name;

        const genresString = serieData.genres.join(', '); 
        document.getElementById('serie-genres').textContent = `Géneros: ${genresString}`;


        document.getElementById('serie-year').textContent = `Año de lanzamiento: ${serieData.premiered}`;
        // Actualiza más elementos según la información que desees mostrar
    })
    .catch(error => {
        console.error('Error al obtener la información:', error);
    });
