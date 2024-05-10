import { Typography } from '@mui/material';
import Education from './Education';
import Introduction from './Introduction';
import Experience from './Experience'
import Skills from './Skills';

export default function About() {
    return (
        <>
            <Introduction/>
            <Education/>
            <Experience />
            <Skills/>
       </>
    );
};

