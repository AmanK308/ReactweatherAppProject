import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    return(
   <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city.toUpperCase()} {
            info.humidity > 80 ? <ThunderstormIcon/>
            :info.temp > 15 ? <WbSunnyIcon/>
            :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature: {info.temp}&deg;C</p>
         <p>Humidity: {info.humidity}</p>
          <p>Max_Temp: {info.temp_max}</p>
        <p>Min_temp: {info.temp_min}</p>
          <p>The Weathe can be described as <i>{info.weather}</i> feels like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
   </div>
    )
}