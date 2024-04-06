import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
    padding: 50px 0;
    text-align: center;
`;

const Headerh1 = styled.h1`
  font-size: 3em;
  margin-bottom: 10px;
`;

const Headerp = styled.p`
  font-size: 1.5em;
`;

export default function Header({name, slogan}: {name: string, slogan: string}) {
  return (
    <HeaderContainer>
        <div>
            <Headerh1>{name}</Headerh1>
            <Headerp>{slogan}</Headerp>
        </div>
    </HeaderContainer>
  );
};