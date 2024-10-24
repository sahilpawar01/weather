import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css"
import { useState } from 'react';

// df908325bfa9f082a3b09b774f24c828


export default function SearchBox({updateInfo})
{   
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "df908325bfa9f082a3b09b774f24c828";

    let [city , setcity] = useState("");
    let [error , seterror] = useState(false);

    // api calling is done using async functions

    let getWeatherInfo = async() =>
    {   
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            temp_max : jsonResponse.main.temp_max,
            temp_min: jsonResponse.main.temp_min,
            humidity :jsonResponse.main.humidity,
            feelslike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,


        }

        console.log(result);
        return result;
    }catch(error)
    {
       throw(error);
    }
    }



    let handleChange =(event)=>
    {
        console.log(event.target.value);
        setcity(event.target.value);
    }

    let search = async(event) =>
    {   try{
        event.preventDefault();
        console.log(city);
        setcity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }catch(err)
    {
        seterror(true);
    }
    }

    return(
        <>
        <div className='searchbox'>
            <h3>search for the weather</h3>
            <form onSubmit={search}>
            <TextField id="city" label="city name" variant="outlined" value={city} onChange={handleChange} />
            <br /><br />
            <Button variant="contained" type='submit' onClick={search}>search </Button>
            {error && <p style={{color: "red"}}>no such place   exists</p>}
            </form>
        </div>
        
        </>
    )
}