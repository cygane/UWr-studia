import React from 'react';
import styled from '@emotion/styled';
import Section from './Section';


export default function About( {about}: {about: string}) {
    return(
        <Section id="about">
          <div className="section-content">
            <h2>About Us</h2>
            <p>{about}</p>
          </div>
        </Section>
    );
}