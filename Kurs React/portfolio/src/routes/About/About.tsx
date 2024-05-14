import { Typography } from '@mui/material';
import Education from './Education';
import Introduction from './Introduction';
import Experience from './Experience'
import Skills from './Skills';
import './styles.css';

export default function About() {
    return (
        <>
            <div className="place-ev">
            <Introduction/>
            <Education/>
            <Experience />
            <Skills/>
            </div>
       </>
    );
};

