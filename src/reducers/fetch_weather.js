


let initialState ={
    weatherData:[]

}


const fetchWeatherData=(state = initialState,action)=>{

    if(action.type === "FETCH_WEATHER"){

        state= {...state, weatherData: action.payload}
    }
    return state;
};
export default fetchWeatherData;


