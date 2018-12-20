const initialState = {
    city: '',
    country: undefined,
    temp: undefined,
    description: undefined,
    icon: undefined
};
//action створює новий стейт коли справджується action.type
export default function fetchWeather(state = initialState, action) {
    if (action.type === 'FETCH_WEATHER') {
        return {
            city: action.payload.city,
            country: action.payload.country,
            temp: action.payload.temp,
            description: action.payload.description,
            icon: action.payload.icon
        };
    }
    return state;
}
