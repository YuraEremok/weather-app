import React, {Component} from 'react';

import Sky from 'react-sky';


//import the connect and bindActionsCreators functions
//this is important
//in order to connect the component to the state in Redux
import {connect} from "react-redux";

import Form from "./form";


class Main extends Component {
    //innerState
    constructor(props) {
        super(props);

        // this.state = {
        //     value:"value"
        //   // value: JSON.parse(localStorage.getItem("value")) || ""
        // }



    }


    render() {
        console.log(this.props.apiConditions);


        let image2 = this.props.apiResponse[3]
        let image = this.props.apiResponse[3] ? ("https://openweathermap.org/img/w/" + image2 + ".png") : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/75px-React-icon.svg.png"
        return (

          <div>
              <Sky
                  images={{
                      0: image, /* You can pass as many images as you want *//* You can pass as many images as you want */
                      1: image, /* You can pass as many images as you want *//* You can pass as many images as you want */
                      2: image, /* You can pass as many images as you want *//* You can pass as many images as you want */


                  }}
                  how={130} /* Pass the number of images Sky will render chosing randomly */
                  time={90} /* time of animation */
                  size={'70px'} /* size of the rendered images */
                  background={'palettedvioletred'} /* color of background */
              />
            <div className="container">
                <h1>Weather App </h1>


                <Form/>

                <h2><i className="far fa-compass"></i> Location</h2>
                <div className="data-container">
                    <div className="square">
                        <p>City</p>
                        <p className="data">{this.props.apiLocation[0]}</p>
                    </div>
                    <div className="square">
                        <p>Country</p>

                        <p className="data">{this.props.apiLocation[4]}</p>
                    </div>
                    <div className="square">
                        <p>Time Zone Id</p>
                        <p className="data">{this.props.apiLocation[2]}</p>
                    </div>

                    <div className="square">
                        <p>Сountry Flag</p>
                        <img  className="CountryFlag" src={"https://www.countryflags.io/"+ this.props.apiLocation[4]+"/flat/64.png"}/>
                    </div>

                </div>

                <h2><i className="fas fa-tint"></i> Current Conditions</h2>
                <div className="data-container">

                    <div className="square">
                        <p>Condition</p>

                        <p className="data">{this.props.apiResponse[2]}</p>
                    </div>
                    <div className="square">
                        <p>Condition image</p>
                        <img className="conditionIcon" src={image} alt="current weather condition icon"/>
                    </div>

                </div>


                <h2><i className="fas fa-thermometer-quarter"></i> Other Conditions </h2>
                <div className="data-container">

                    <div className="square">
                        <p>Pressure</p>
                        <p className="data">{this.props.apiConditions[1]} mbar </p>

                    </div>
                    <div className="square">
                        <p>Feels like (Celcius)</p>
                        <p className="data">{this.props.apiConditions[0]} °C</p>
                    </div>
                    <div className="square">
                        <p>Feels like (Fahrenheit)</p>
                        <p className="data">{Math.round(this.props.apiConditions[3] * 9 / 5 + 32)} °F</p>
                    </div>
                    <div className="square">
                        <p>Humidity</p>
                        <p className="data">{this.props.apiConditions[2]} %</p>
                    </div>

                </div>

            </div>

              </div>
        );
    }
}


function mapStateToProps(state) {
//allows us to get the data from the store
//using props
//the value here is a little tricky
//state.ReducerName.reducerProperty
    return {
        apiResponse: state.FetchWeatherReducer.weatherData,
        apiLocation: state.FetchWeatherLocation.location,
        apiConditions: state.FetchCurrentConditions.conditions,
    }
}

//remember that to call this property using "props.FetchAPIResponse"


//we export the component using the connect from Redux
//we pass the functions that connect the props and the actions
export default connect(mapStateToProps, null)(Main);//the name of the component

// I think that is all 
