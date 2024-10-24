import SearchBox from "./Searchbox"
import Infobox from "./Infobox"
import { useState } from "react"

export default function()
{   
    const [weaterinfo , setweatherinfo] = useState({
        city : "delhi",
        feelslike : 33.74,
        humidity : 78,
        maxtemp : 34,
        mintemp : 23,
        temp : 23,
        weather : "haze"
    })

    let updateInfo = (result) =>
    {
        setweatherinfo(result);
    }

    return(
        <>
        <div style={{textAlign : "center"}}>
        <h1>Weather app by sahil</h1>
        <SearchBox updateInfo={updateInfo}/>
        <Infobox info={weaterinfo}/>

        </div>       
        
        </>
    )
}