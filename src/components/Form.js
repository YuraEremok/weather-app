import React, { Component } from 'react';



import Autocomplete from 'react-google-autocomplete';
import {connect} from "react-redux";
import {fetchAPIResponse} from "../actions/fetch_api_data";

import { bindActionCreators } from 'redux';

//import the action





class Form extends Component {


    constructor(props){
        super(props);

        this.state = {
             error:"",
            formValid:true,
            search:""
/*
           value: JSON.parse(localStorage.getItem("value")) || ""
*/
         }



    }





    // handleUsernameChange = e => {
    //
    //     const target = e.target;
    //
    //
    //
    // }



    getWeather =  (e) => {

        e.preventDefault();

        let value = e.target.elements.city.value


// ... this.props.FetchAPIResponse
        this.props.FetchAPIResponse(value)
    }




    render(){

        return (

        <form  onSubmit={this.getWeather}   >



            <div className="form">

            <Autocomplete

                style={this.props.error.message  && {borderColor: "red"}}
            name="city"
            onPlaceSelected={(place) => {

            }}
            // onChange ={this.changeHandler}
            types={['(regions)']}
            type ="search"
            autoFocus
            onChange={this.handleUsernameChange}
            required
            validate="true"
                autocomplete="on"
                />
            <button class ="btn"  disabled={!this.state.formValid}>Get Weather</button>
                <span className="error">{this.props.error.message && "Сity not found, please specify data"}</span>

            </div>
        </form>
    )
}
}

function mapStateToProps(state){

    return{
        error:state.errorNot.error
    }
}

function matchDispatchToProps(dispatch){

    //bind the action to be executed
    return bindActionCreators({FetchAPIResponse:fetchAPIResponse}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Form);//the name of the component

