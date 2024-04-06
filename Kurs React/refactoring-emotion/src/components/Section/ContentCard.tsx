import React from 'react';
import styled from '@emotion/styled';

const ContentCardContainer = styled.div`
  border-radius: 10px;
  margin: 20px 0;
`;

export default function ContentCard({ children }: { children: React.ReactNode }) {
    return (
        <ContentCardContainer>
            {children}
        </ContentCardContainer>
    );
}