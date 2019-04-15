import React from 'react';

import Autocomplete from 'react-google-autocomplete';
import {connect} from "react-redux";
import {fetchAPIResponse} from "../actions/fetch_api_data";

import {bindActionCreators} from 'redux';


const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
};



const Form = (props) => {


    const [value, setValue] = useStateWithLocalStorage(
        'myValueInLocalStorage'
    );

    const onChange = event => setValue(event.target.value);

    const getWeather = (e) => {
        e.preventDefault();
        let value = e.target.elements.city.value
        props.FetchAPIResponse(value)
    }


    return (

        <form onSubmit={getWeather}>


            <div className="form">

                <Autocomplete

                    style={props.error.message && {borderColor: "red"}}
                    name="city"
                    onPlaceSelected={(place) => {

                    }}
                    value={value}
                    types={['(regions)']}
                    type="search"
                    autoFocus
                    onChange={onChange}
                    required
                    validate="true"
                    autocomplete="on"
                />
                <button class="btn">Get Weather</button>
                <span className="error">{props.error.message && "Сity not found, please specify data"}</span>

            </div>
        </form>
    )

}

function mapStateToProps(state) {

    return {
        error: state.errorNot.error
    }
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({FetchAPIResponse: fetchAPIResponse}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Form);

