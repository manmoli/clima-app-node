const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async() => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} de de ${temp}`;

    } catch (e) {
        return `No se puedo derermianr en clima en ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then((mensaje) => {
        console.log(mensaje);
    }).catch((e) => {
        console.log(e);
    });