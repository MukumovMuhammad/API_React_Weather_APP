import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState({})
  const [location, setlocation] = useState("")
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=377a740158ec6984c247960f3393caa0`

  const searchLocation = (event) => {
    if (event.key == 'Enter') {
      axios.get(url).then((response) => {
        console.log(response);
        setData(response.data)
        console.log(response.data)

      })

      setlocation('');
    }



  }
  return (
    <div className="App">

      <div className='search'>
        <input
          value={location}
          onChange={event => setlocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type='text'
        />
      </div>
      {/* Container  */}
      <div className='container'>
        {/* TOP */}
        <div className="top">
          <div className='location'>
            <p>{data.name}</p>
          </div>

          <div className='temp'>
            {data.main ? <h1> {data.main.temp.toFixed()} °C</h1> : <h1> °C</h1>}
          </div>
          <div className='description'>
            {data.main ? <p> {data.weather[0].description}</p> : null}
          </div>
        </div>

        {/* BUTTOM */}
        <div className="buttom">

          <div className='feels'>
            {data.main ? <p> {data.main.feels_like.toFixed()}</p> : null}
            <p>Feels like </p>
          </div>

          <div className='humidity'>
            {data.main ? <p> {data.main.humidity}%</p> : null}
          </div>
          <div className='wind'>
            {data.main ? <p> {data.wind.speed.toFixed()}MPH</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
