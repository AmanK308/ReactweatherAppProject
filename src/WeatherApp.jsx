import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SeachBox'

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city:"Mumbai",
        feels_like: 35.99,
        humidity:89,
        temp:28.99,
        temp_max:28.99,
        temp_min:28.99,
        weather:"mist"
     });

     let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
     }

    return(
        <>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info ={weatherInfo}/>
        </>
    )
}