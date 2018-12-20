let mockApiData = {};

const API_KEY = 'ecd0760245adf6ca1732fce6a8a8a775';

async function weather() {
    const city = document.getElementById("inputCity").value;
    const country = document.getElementById("inputCountry").value;
    let location = '';
    if (country !== undefined && country !== '') {
        location += city + ', ' + country;
    } else {
        location += city
    }
   
    try {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=metric`);
        const data = await api_call.json();
        return (
            mockApiData.city = data.name, 
            mockApiData.country = data.sys.country,
            mockApiData.temp = data.main.temp,
            mockApiData.hymidity = data.main.hymidity,
            mockApiData.clouds = data.clouds.all,
            mockApiData.description = data.weather[0].description,
            mockApiData.icon = data.weather[0].icon
        );
    } catch (e) {
        console.log('Error: ' + e);
    }
 }
			

export const getWeather = () => dispatch => {
    weather();
    setTimeout(() => {
    dispatch({type: 'FETCH_WEATHER', payload: mockApiData});
    }, 500);
}