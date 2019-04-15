

let initialState = {
    conditions: []
}

const fetchConditions = (state = initialState,action)=>{

    if (action.type === "FETCH_CONDITIONS") {

        state = {...state, conditions: action.payload}
    }

    return state;
};



export default fetchConditions;







