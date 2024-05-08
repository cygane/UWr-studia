import Section from "./Section";

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
          <ul className="list-none p-0 m-0">
            {services.map((service) => (
              <li className="mb-20 text-left" key={service.id}>
                <h3 className="ext-3xl mb-10">{service.name}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </Section>
    );
}