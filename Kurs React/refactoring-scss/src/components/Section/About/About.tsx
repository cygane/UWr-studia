import classes from "./styles.module.scss";
import Section from "../Section";

interface AboutIProps {
    about: string;
}

export default function About({about}: AboutIProps) {
    return (
        <section id="about" className="section about">
          <div className="section-content">
            <h2>About Us</h2>
            <p>{about}</p>
          </div>
        </section>
    );
}