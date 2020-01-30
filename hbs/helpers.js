//los helpers contienen la lógica de presentaciob que es compartida entre vistas,layouts. podemos crear nuestros propios helpers
const hbs = require('hbs');

// Helpers 
//este helper nos da la fecha actual en este caso eños escogido el año
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//este helper nos ayuda a transformar un string y a estandarizarlo como nosotros creamos conveniente
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});