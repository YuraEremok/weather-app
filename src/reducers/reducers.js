import {combineReducers} from "redux";


import FetchWeather from "./fetch_weather";
import FetchLocation from "./fetch_location";
import Error from "./error";
import FetchConditions from "./fetch_conditions";


const reducers= combineReducers({
    FetchWeatherReducer : FetchWeather,
    FetchWeatherLocation: FetchLocation,
    FetchCurrentConditions: FetchConditions,
    errorNot:Error});



export default reducers;