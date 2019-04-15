//we import axios since we need to call an API
import axios from "axios";

//an action is just a function
const API_KEY = "73268a7de5c636172dacd291890f5218";



export function fetchAPIResponse(city){

    return function(dispatch){





        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`).then(response=>{
            


            let arr = [response.data.name];
            for (var key in response.data.sys) {
              arr.push(response.data.sys[key]);
            }
            dispatch({type:"FETCH_LOCATION", payload:arr});
            dispatch({type:"ERROR", payload:""})

            let arr2 =[];

            for (var key2 in response.data.weather[0]) {


                arr2.push(response.data.weather[0][key2]);
            }

            console.log(arr2);


            // //splice (remove) it from the array
            //
            // --- DISPATCH THE ACTION
            // --- remember each ACTION has its own property
            //dispatch the FETCH_WEATHER action
            dispatch({type:"FETCH_WEATHER", payload:arr2});







            let arr3 = [];
            debugger
            for (var key3 in response.data.main) {
              arr3.push(response.data.main[key3]);
            }

            // --- DISPATCH THE ACTION
            //dispatch the FETCH_CONDITIONS action
            dispatch({type:"FETCH_CONDITIONS", payload:arr3});





        }).catch(err=>{

    dispatch({type:"ERROR", payload:err})


        });
        // we got now 1 action, which dispatches 3 actions or events
        //we need to import this action in our component
   }
}