import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Forecast from './components/forecast';

function App() {
  const [data, setData] = useState({})
  const [forecast, setForecast] = useState({})
  const [location, setlocation] = useState("");


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=377a740158ec6984c247960f3393caa0`
  const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=377a740158ec6984c247960f3393caa0`
  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      try {
        const responsePromises = [
          axios.get(url),
          axios.get(forecast_url)
        ];
        const [responseData, forecastResponse] = await Promise.all(responsePromises);
        setData(responseData.data);
        setForecast(forecastResponse.data);
      }
      catch {
        handleAxiosError();
      }
      setlocation('');
    }
  }

  let isAlertShown = false;
  function handleAxiosError() {
    if (!isAlertShown) {
      alert("You entered invalid input, please try again !");
      isAlertShown = true;
    }
  }


  return (
    <div className="App">

      {/* SEARCH */}
      <div className='search'>
        <input
          value={location}
          onChange={event => setlocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type='text'
        />
      </div>

      {!data.name && <div>
        <h1>Hello there!</h1>
      </div>}

      <div className='Large_container'>
        {/* Container  */}
      {data.name && <div className='container'>
        {/* TOP */}
        <div className="top">
          <div className='location'>
            <p>Location : {data.name}</p>
          </div>

          <div className='temp'>
            <h1> {data.main.temp.toFixed()} °C <img alt='weather-icon' src='icons/01d.png'/></h1>
            
          </div>
          <div className='description'>

            <p>Description: {data.weather[0].description}</p>
          </div>
        </div>

        {/* BUTTOM */}
        <div className="buttom">

          <div className='feels'>
            <p> {data.main.feels_like.toFixed()}</p>
            <p>Feels like </p>
          </div>


          <div className='humidity'>
            <p> {data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p> {data.wind.speed.toFixed()}MPH</p>
            <p>Wind</p>
          </div>
        </div>



      </div>}

        {/* {forecast && <Forecast data={forecast}/>} */}
        <Forecast data={forecast}/>
      </div>

    </div>
  );
}

export default App;
