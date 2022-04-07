const axios = require('axios');

export const getClimate = async (lat, lng) => {
    const coordDefault = { lat: -28.2628, lng: -52.4067, region: 'Passo Fundo - RS' };
    if (!lat && !lng) {
        lat = coordDefault.lat;
        lng = coordDefault.lng
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=52f592c34ccda232d98128280512d784`
    const response = await axios.get(`${url}`);
    return response
};

export const getLocal = async (lat, lng) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}6&lon=${lng}`
    const response = await axios.get(`${url}`)
    return response;
}

