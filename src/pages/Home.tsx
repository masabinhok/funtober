import { Link } from 'react-router-dom';
import funtobers from '../data/funtobers';
import styled from 'styled-components';

const HomeContainer = styled.div`
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden; // Ensures images are contained within borders
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05); // Slight scale on hover for effect
  }
`;

const Image = styled.img`
  border-radius: 15px;
  border: 2px solid #3498db; // Using a consistent border color
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #e74c3c; // Change border color on hover
    transform: translate(2px, -2px); // Slight translate effect
  }
`;

const Footer = styled.footer`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const FooterText = styled.p`
  text-align: center;
  color: #7f8c8d; // A lighter color for contrast
  font-size: 1.25rem;
`;

const Button = styled.button`
  background-color: #3498db;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #2980b9; // Darker blue on hover
    transform: translateY(-2px); // Lift effect
  }

  &:active {
    background-color: #1c598a; // Darker shade when active
    transform: translateY(0); // Reset on active
  }
`;

// New Footer Section
const NewFooter = styled.footer`
  padding: 20px;
  background-color: #f4f4f4; // Light background for separation
  border-top: 1px solid #ddd; // Separator line
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewFooterText = styled.p`
  text-align: center;
  color: #555; // Darker text for contrast
  font-size: 1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Nav>
        <Title>FUNTOBER</Title>
        <Subtitle>Spooky season is here!</Subtitle>
      </Nav>
      <GridContainer>
        {funtobers.map((funtober) => {
          return (
            <ImageContainer key={funtober.id}>
              <Link to={funtober.link}>
                <Image
                  src={funtober.imageUrl}
                  alt={funtober.name}
                />
              </Link>
            </ImageContainer>
          );
        })}
      </GridContainer>
      <Footer>
        <FooterTitle>What is Funtober?</FooterTitle>
        <FooterText>
          Funtober is a collection of fun projects to do during the month of
          October. Let's celebrate Open Source.
        </FooterText>
        <div className="w-full flex justify-center items-center max-w-[1320px] my-5">
          <a target="_blank" href="https://github.com/masabinhok/funtober">
            <Button>Star Us On GitHub</Button>
          </a>
        </div>
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
      {/* New Footer Section */}
      <NewFooter>
        <NewFooterText>© 2024 Funtober. All rights reserved.</NewFooterText>
        <NewFooterText>
          Follow us on social media for updates and more fun projects!
        </NewFooterText>
      </NewFooter>
    </HomeContainer>
  );
}

export default Home;
