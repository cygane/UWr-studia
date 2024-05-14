import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import './styles.css';

interface IImgMediaCard{
  img: any,
  title: string;
  description: string[];
  href: string;
  code: string;
  tech: string;
}

export default function ImgMediaCard({img, title, description, href, code, tech}: IImgMediaCard) {
  return (
    <div className='mediacard'>
    <Card >
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {tech}
        </Typography>
        {description.map((item) =>(
            <ListItem>
                {item}
            </ListItem>
        ))}
      </CardContent>
      <CardActions>
      <div className="button-place">
        {href !== "" && <Button key={href} component={Link} to={href} sx={{ my: 2}}>
            See live
        </Button>}
        {code !== "" && <Button key={code} component={Link} to={code} sx={{ my: 2}}>
            See code
        </Button>}
        </div>
      </CardActions>
    </Card>
    </div>
  );
}
