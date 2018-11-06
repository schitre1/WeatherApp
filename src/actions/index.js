import axios from 'axios';

const API_KEY= 'ZZZZZ';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
//action creator returns an action - an object which always needs to have a type
export function fetchWeather(city){ //city is the search term
    const url = `${ROOT_URL}&q=${city},us`; //we are making country code static in this applicaition
    
    const request = axios.get(url); //this will return a promise
    console.log('Request '+ request);

    return {
        type: FETCH_WEATHER,
        payload: request //payload is an optional additional property that contains additional data that describes the action
    }
}