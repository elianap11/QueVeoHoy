//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var controladorPeliculas = require ('./controladores/controladorPeliculas');
var controladorGeneros = require ('./controladores/controladorGeneros');
var controladorRecomendaciones = require ('./controladores/controladorRecomendaciones');
var controladorInformacionDePelicula = require ('./controladores/controladorInformacionDePelicula');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//pido las peliculas
app.get ('/peliculas', controladorPeliculas.buscarPeliculas);
app.get ('/generos', controladorGeneros.buscarGenero);
app.get ('/peliculas/recomendacion', controladorRecomendaciones.buscarRecomendacion);
app.get ('/peliculas/:id', controladorInformacionDePelicula.obtenerPelicula);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});
