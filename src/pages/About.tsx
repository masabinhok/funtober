import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333; // Default text color
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  margin-top: 20px; // Added space at the top
  background-color: rgba(248, 249, 250, 0.8); // Semi-transparent background for blur effect
  backdrop-filter: blur(10px); // Apply blur effect
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Optional shadow for depth
`;

const Title = styled.h1`
  font-size: 4rem; // Adjusted for better scalability
  font-weight: bold;
  color: #2c3e50; // A more professional color
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #8e44ad; // A more subdued color
  transition: all 0.3s ease-in-out;
`;

const ContentContainer = styled.div`
  padding: 20px;
  max-width: 800px; // Limit width for readability
  margin: 0 auto; // Center content
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #555; // Darker color for text
`;

const Footer = styled.footer`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  text-align: center;
  color: #7f8c8d; // A lighter color for contrast
  font-size: 1.25rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <Nav>
        <Title>About FUNTOBER</Title>
        <Subtitle>Learn more about our spooky projects!</Subtitle>
      </Nav>
      <ContentContainer>
        <Paragraph>
          FUNTOBER is a collection of exciting projects to celebrate the month of October, 
          embracing the spooky season with creativity and fun. Whether you’re looking to 
          engage in open-source contributions, develop new skills, or simply have a great time, 
          there’s something here for everyone.
        </Paragraph>
        <Paragraph>
          Our mission is to bring together individuals who share a passion for programming 
          and creativity. Throughout the month, we encourage participants to explore various 
          projects, collaborate with others, and share their experiences.
        </Paragraph>
        <Paragraph>
          Join us in celebrating the spirit of Halloween while fostering a vibrant 
          open-source community. Let’s make this October a month to remember!
        </Paragraph>
      </ContentContainer>
      <Footer>
        <FooterText>
          Made with ❤️ by{' '}
          <a
            className="text-secondary hover:underline"
            href="https://twitter.com/masabinhok"
          >
            Sabin Shrestha
          </a>{' '}
          and{' '}
          <a
            className="text-secondary hover:underline"
            href="https://github.com/masabinhok/funtober/graphs/contributors"
          >
            Contributors
          </a>
        </FooterText>
      </Footer>
    </AboutContainer>
  );
};

export default About;
