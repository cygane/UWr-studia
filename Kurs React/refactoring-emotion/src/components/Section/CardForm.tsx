import React from 'react';
import styled from '@emotion/styled';
import Section from './Section';

const ContactContainer = styled.div`
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
max-width: 500px;
margin: 0 auto;
padding: 20px;
border-radius: 10px;
display: flex;
flex-direction: column;
`;

const ContactFormGroup = styled.div`
margin-bottom: 20px;
`;

const ContactTextArea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  resize: vertical;
`;

const ContactInput = styled.input`
width: calc(100% - 20px);
padding: 10px;
border-radius: 5px;
border: none;
margin-top: 5px;
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export default function CardForm () {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return(
        <Section id="contact">
          <ContactContainer>
            <h2>Contact Us</h2>
            <ContactForm onSubmit={handleSubmit}>
              <ContactFormGroup>
                <ContactInput type="text" placeholder="Name" required />
              </ContactFormGroup>
              <ContactFormGroup>
                <ContactInput type="email" placeholder="Email" required />
              </ContactFormGroup>
              <ContactFormGroup>
                <ContactTextArea rows={5} placeholder="Message" required></ContactTextArea>
              </ContactFormGroup>
              <ContactButton type="submit">Send Message</ContactButton>
            </ContactForm>
          </ContactContainer>
        </Section>
    );
}