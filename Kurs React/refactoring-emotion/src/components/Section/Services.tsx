import React from 'react';
import styled from '@emotion/styled';
import Section from './Section';

const Servicesul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Servicesli = styled.li`
  margin-bottom: 20px;
  text-align: left;
`;

const Servicesh3 = styled.h3`
    font-size: 1.8em;
    margin-bottom: 10px;
`;

interface ServicesIProps {
    services: {
        id: number;
        name: string;
        description: string;
    }[];
}

export default function Services({services}:ServicesIProps) {
    return( 
    <Section id="services">
    <div>
      <h2>Our Services</h2>
      <Servicesul>
        {services.map((service) => (
          <Servicesli key={service.id}>
            <Servicesh3>{service.name}</Servicesh3>
            <p>{service.description}</p>
          </Servicesli>
        ))}
      </Servicesul>
    </div>
  </Section>);
}