//llamado de clases,paquetes, funciones que requerimos para poder utulizar sus modulos,funciones.
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//definimos el puerto
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
//buscamos en todos los directorios donde definimos una direccion los hbs 
hbs.registerPartials(__dirname + '/views/parciales'); 
app.set('view engine', 'hbs');
//funcion que renderizamos la pagina de home
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "Stalin Vega"
    });
});
//funcion que renderizamos la pagina de about
app.get('/about', (req, res) => {
    //res.send('Esta es mi primera web app');
    res.render('about');
});

// funcion que llamado el puerto que vamos a utilizar para deployar el proyecto
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});