import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from './logo.jpg'; // Update the path to your logo image

const NavbarContainer = styled.nav`
  height: 100px; // Adjusted height
  width: 100%; // Full width
  display: flex;
  justify-content: space-between; // Space between logo and title
  align-items: center;
  padding: 20px; // Adjust padding as needed
  background-color: rgba(248, 249, 250, 0.8); // Semi-transparent background for blur effect
  backdrop-filter: blur(10px); // Apply blur effect
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Optional shadow for depth
`;

const LogoLink = styled(Link)`
  display: flex; // Use flex to center logo vertically
  align-items: center; // Center logo vertically
`;

const Logo = styled.img`
  height: 80px; // Set height for the logo
  width: auto; // Maintain aspect ratio
  margin-right: 20px; // Space between logo and title
`;

const Title = styled.h1`
  font-size: 3rem; // Adjust font size as needed
  font-weight: bold;
  color: #2c3e50; // A professional color for the title
  margin: 0; // Remove default margin
`;

const Subtitle = styled.p`
  font-size: 1.5rem; // Adjust font size as needed
  color: #8e44ad; // A more subdued color
  margin: 0; // Remove default margin
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center; // Center vertically
`;

const AboutLink = styled(Link)`
  font-size: 1.5rem; // Adjust font size for the link
  color: #3498db; // Color for the link
  margin-left: 20px; // Space between the title and the link
  text-decoration: none; // Remove underline
  transition: color 0.3s; // Smooth transition for color change

  &:hover {
    color: #2980b9; // Darker blue on hover
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoLink to="/"> {/* Link added for the logo */}
        <Logo src={logo} alt="Funtober Logo" /> {/* Logo added here */}
      </LogoLink>
      <div>
        <Title>FUNTOBER</Title>
        <Subtitle>Spooky season is here!</Subtitle>
      </div>
      <NavLinks>
        <AboutLink to="/about">About</AboutLink> {/* Link to About page */}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
