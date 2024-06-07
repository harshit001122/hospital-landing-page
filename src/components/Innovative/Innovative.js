import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Innovative(props) {
  return (
    <>
    <div className="header-left">
        <h1>Clinic with Innovatives</h1><br/>
        <h4>We provide the most full medical services, so every person could<br/> have the oppurtunity to recieve qualitative medical help.</h4>
        <div className="header-buttons">
          <button className="header-button">Learn More</button>
        </div>
    </div>
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.img}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </>
  );
}