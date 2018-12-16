import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form onSubmit = {props.getWeather}>
            <input type="text" name="city"></input>
            <input type="text" name="country"></input>
            <button>Get Weather</button>
            </form>
        </div>
    )
}


export default Form;