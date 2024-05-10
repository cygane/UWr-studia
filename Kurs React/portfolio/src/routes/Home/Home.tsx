import { Box, Container } from "@mui/system";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import {Typography} from "@mui/material";

export default function Home(){
    return(
        <Box sx={{ bgcolor: "primary.light", py: 3 }}>
            <Container maxWidth="md">
                <Typography>
                    Julia Cygan
                </Typography>
                <Typography>
                Computer Science student at University of Wrocław.
                </Typography>
                <Link href="mailto:juliacygan46@gmail.com" underline="none" sx={{ fontSize: '1.2em', color: 'inherit', marginLeft: '0.5em' }}>
                    <EmailIcon /> 
                </Link>
                <Link href="https://github.com/cygane" target="_blank" underline="none" sx={{ fontSize: '1.2em', color: 'inherit', marginLeft: '0.5em' }}>
                    <GitHubIcon /> 
                </Link>
                <Link href="https://www.facebook.com/julia.cygan.121" target="_blank" underline="none" sx={{ fontSize: '1.2em', color: 'inherit', marginLeft: '0.5em' }}>
                    <FacebookIcon />
                </Link>
            </Container>
        </Box>
    );
}