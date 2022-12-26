import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form } from "react-bootstrap";
import '../Components/Weather.css';

const Weather = () => {
    const [weather, setWeather] = useState([])
    const [citySelected, setCitySelected] = useState("nagpur");
//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/nagpur?unitGroup=metric&key=ZQWZR7YVRKD5RNDH9NV4LH584&contentType=json
    useEffect(() => {
        axios
            .get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${citySelected}?unitGroup=metric&key=ZQWZR7YVRKD5RNDH9NV4LH584&contentType=json`)
            .then((res) => setWeather(res.data))
            .catch((err) => console.log(err))
    }, [citySelected])
    // const print = ''
    // const icon = weather.days[0].icon
    // if (icon === 'clear-day'){
    //     print = 'clear day'
    // }
    
    return (
        <div className='weather'><br>
        </br>

    <Form.Control style={{ width: "50%", margin: "10px auto", backgroundColor:'black',color: 'white' }} className='input' type="email" placeholder="Enter City Name Without Space" value={citySelected}
        onChange={(e) => setCitySelected(e.target.value)} />
        {weather?.days?.length>0 && (<>
            <h1>Temp: {weather?.days[0].temp}&deg;c</h1>
            <h2>City: {weather?.address}</h2>
            <div className='desc'>{weather?.description} </div>
            <div className='info'>Minimum Tempurature: {weather?.days[0].tempmin}&deg;C </div>
            <div className='info'>Maximum Tempurature: {weather?.days[0].tempmax}&deg;C</div>
            <div className='info'>Humidity: {weather?.days[0].humidity}%</div>
            <div className='info'>Sunrise: {weather?.days[0].sunrise}</div>
            <div className='info'>Sunset: {weather?.days[0].sunset}</div>
            <div className='info'>Wind: {weather?.days[0].windspeed} Km/h</div>
            <div className='info'>UV Index: {weather?.days[0].uvindex}</div>
            </>
        )}
       

            
            
            {/* {print} */}
    </div>
    )
}

export default Weather