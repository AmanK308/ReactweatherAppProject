
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ThemeContext } from '@emotion/react';

export default function SearchBox({updateInfo}){
   let [city, setCity] = useState("");
  let [error, setError] = useState(false);

   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "ecf5aa009a8134946551c9919ff69b38";


   let getWeather = async() => {
       try{
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes = await res.json();
        let result = {
            city:city,
            temp: jsonRes.main.temp,
            humidity: jsonRes.main.humidity,
            temp_max: jsonRes.main.temp_max,
            temp_min: jsonRes.main.temp_min,
            feels_like: jsonRes.main.feels_like,
            weather: jsonRes.weather[0].description,
        };
        console.log(result);
        return result;
       }catch(err){
    throw err;
       }
   };

  
    let handleChange = (event) => {
        setCity(event.target.value)  
    };

    let handleSubmit = async (event)=> {
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let info = await getWeather();
        updateInfo(info);
       }
       catch(err){
        setError(true);
       }
    };

    return(
        <div style={{marginBottom:"25px"}}>
           <form onSubmit={handleSubmit}>
           <TextField id="city"  label="City Name" variant="outlined" value={city} onChange={handleChange}  required>{city}</TextField>
           <br/><br />
           <Button type='submit' variant="contained" size='large'>Search</Button>
           {error && <p style={{color:"red"}}>No such place exist!</p>}
           </form>
        </div>
    )
}