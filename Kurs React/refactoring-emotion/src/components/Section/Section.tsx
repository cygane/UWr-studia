import React from 'react';
import styled from '@emotion/styled';

const SectionContainer = styled.section`
    padding: 20px 0;
    max-width: 800px;
    margin: 0 auto;
`;

const Sectionh2 = styled.h2`
    font-size: 2.5em;
    margin-bottom: 20px;
    display: inline-block;
`;

interface SectionIProps {
    id: string;
    children: React.ReactNode;
}

export default function Section({id, children}: SectionIProps) {
    return (
        <SectionContainer id={id}>
            {children}
        </SectionContainer>
    );
}