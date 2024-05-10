import { Box, Container } from "@mui/system";
import {Typography} from "@mui/material";
import image from '../../assets/IMG_5083.jpg'

export default function Introduction(){
    return(
        <Box sx={{ bgcolor: "primary.light", py: 3 }}>
            <Container maxWidth="md">
                <Typography>
                    More about me, beacuse you're obviously curious:
                </Typography>
                <Typography>
                So as you already know I'm Julia Cygan and besides studying I have some interests as reading the witcher and sport 
                (once I was a Polish Champion, in a boring sport called swimming). Ooh, I was about to forgot about travelling and drinking my fave coffee (just simply black, like my soul).
                </Typography>
                <img src={image}/>
                <Typography>
                Yep, that's me.
                </Typography> 
            </Container>
        </Box>
    );
}