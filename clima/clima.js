const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=03df2e6d25ca2f88d07ea1b30b4bd27e`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}