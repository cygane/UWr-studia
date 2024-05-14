import { Box, Container } from "@mui/system";
import {Typography} from "@mui/material";
import image from '../../assets/IMG_5083.jpg'
import './styles.css';

export default function Introduction(){
    return(
        <Box sx={{ bgcolor: "primary.light", py: 3 }}>
            <div className="intro-place">
            <img className="picture" src={image}/>
            <Container sx={{margin: '0'}}>
                <Typography>
                    More about me, beacuse you're obviously curious:
                </Typography>
                <Typography>
                So as you already know I'm Julia Cygan and besides studying I have some interests as reading the witcher and sport 
                (once I was a Polish Champion, in a boring sport called swimming). Ooh, I was about to forgot about travelling and drinking my fave coffee (just simply black, like my soul).
                </Typography> 
            </Container>
            </div>
        </Box>
    );
}