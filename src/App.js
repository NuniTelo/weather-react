import React, { Component } from 'react';
import './App.css';

/*Import all the components that we need*/
import Form from './components/form';
import Header from './components/header';
import InfoSection from './components/infosection';

import generateData from './components/test';

const API_CALL = "http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=ae7bbbe332780e52b0ee4412dd304d61";

class App extends Component {

  /*Set the state, first undefined then we change the data*/
  state = {
    temperature: undefined,
    city : undefined,
    country : undefined,
    description: undefined
  }

  getWeather = async(e) => {
    e.preventDefault();   //dont refresh the page

    //To capture the imput we do: 
    const city_name = e.target.elements.city.value;  //we capture by name
    const country_name = e.target.elements.country.value; //capture by country name

    console.log(city_name);
    const fetch_data = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+city_name+","+country_name +"&appid=ae7bbbe332780e52b0ee4412dd304d61");   //make the api call
    const data = await fetch_data.json();    //after the api call then we go there and convert to json
    console.log(data);   


    //now we change the state of the variables so we know when data changes
    this.setState({
      temperature : data.main.temp,
      city: data.name,
      country: data.sys.country,
      description:data.weather[0].description
    });   // Here we set the state of the data 

  }


  componentDidMount() {
    generateData();
  }


  render() {
    return (
      <div>

    
        <Header />

        <Form getWeather = {this.getWeather}/>

        <InfoSection temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          description = {this.state.description} 
          />

      </div>
    );
  }
}

export default App;
