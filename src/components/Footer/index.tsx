import {
  BackButton,
  Container,
  List,
  SectionContainer,
  Title,
  InfoContainer,
} 
from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <BackButton>back to start</BackButton>
      <InfoContainer>
        <SectionContainer>
          <Title>ABOUT US</Title>
          <List>
            <li>general informations</li>
            <li>address</li>
            <li>work with us</li>
          </List>
        </SectionContainer>

        <SectionContainer>
          <Title>SHOP</Title>
          <List>
            <li>payment options</li>
            <li>fidelity card</li>
          </List>
        </SectionContainer>

        <SectionContainer>
          <Title>SUPPORT</Title>
          <List>
            <li>payment problems</li>
            <li>product not received</li>
            <li>talk to virtual assistant</li>
          </List>
        </SectionContainer>
      </InfoContainer>
    </Container>
  );
}

export default Footer;