import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Infobox.css";

export default function Infobox({info})
{       
    const INIT_URL = "https://images.unsplash.com/photo-1727946283836-cec378342537?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    let Cold_URL = "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let Hot_URL = "https://images.unsplash.com/photo-1523653049681-701d71cf57c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90fGVufDB8fDB8fHww";
    let Humid_URL = "https://plus.unsplash.com/premium_photo-1681550093390-14477e7b196a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVtYmFpJTIwaHVtaWRpdHl8ZW58MHx8MHx8fDA%3D";



    return(
        <>
        <div className="infobox">
            <h1>weather information</h1>
            <div className="cardcontent">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 70 
          ? Humid_URL
        : info.temp >500 
        ? Hot_URL
        :Cold_URL
      }
        title="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div className="temp">Temperature={info.temp}&deg;F</div>
          <div className="humidity">humidity={info.humidity}</div>
          <p>max temp : {info.temp_max}</p>
          <p>min temp : {info.temp_min}</p>
          <p>the weather can be described as {info.weather} and feels like {info.feelslike}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>

        </div>
        </>
    )
}