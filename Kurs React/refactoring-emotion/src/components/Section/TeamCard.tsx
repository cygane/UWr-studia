import React from 'react';
import styled from '@emotion/styled';
import Section from './Section';

const TeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamMemberContainer = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  padding: 20px;
  margin: 10px;
  text-align: center;
`; 

const TeamMemberimg = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
`; 

const TeamMemberh3 = styled.h3`
  margin-bottom: 10px;
  display: inline-block; 
`; 

interface TeamCardIProps {
    teamMembers: {
        id: number;
        name: string;
        position: string;
        bio: string;
        image: string;
    }[];
}


export default function TeamCard({teamMembers} : TeamCardIProps) {
    return (
        <Section id="team">
          <div>
            <h2>Meet Our Team</h2>
            <TeamMembersContainer>
              {teamMembers.map((member) => (
                <TeamMemberContainer key={member.id}>
                  <TeamMemberimg src={member.image} alt={member.name} />
                  <div>
                    <TeamMemberh3>{member.name}</TeamMemberh3>
                    <p>{member.position}</p>
                    <p>{member.bio}</p>
                  </div>
                </TeamMemberContainer>
              ))}
            </TeamMembersContainer>
          </div>
        </Section>
    );
}