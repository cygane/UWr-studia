import Section from "./Section";

interface AboutIProps {
    about: string;
}

export default function About({about}: AboutIProps) {
    return (
        <Section id="about">
          <div className="section-content">
            <h2>About Us</h2>
            <p>{about}</p>
          </div>
        </Section>
    );
}