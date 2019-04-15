

let initialState = {
    error:""
}

const Error = (state = initialState,action)=>{


    if (action.type === "ERROR") {

        state = {...state, error: action.payload}
    }

    return state;
};



export default Error;







