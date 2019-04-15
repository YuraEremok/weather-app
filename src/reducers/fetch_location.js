

let initialState = {
    location: []
}

const fetchLocation = (state = initialState,action)=>{

    if (action.type === "FETCH_LOCATION") {

        state = {...state, location: action.payload}
    }

    return state;
};



export default fetchLocation;