import classes from "./styles.modules.scss";
import Section from "../Section";

interface ServicesIProps {
  services: {
    id: number;
    name: string;
    description: string;
  }[];
}

export default function Services({services}: ServicesIProps) {
    return (
        <Section id="services">
          <h2>Our Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </Section>
    );
}