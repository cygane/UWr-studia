import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  padding: 20px 0;
  text-align: center;
`;

export default function Footer({name}: {name: string}) {
  return (
    <FooterContainer>
      <div>
        <p>
          &copy; {new Date().getFullYear()} {name}
        </p>
      </div>
    </FooterContainer>
  );
};



