import React from 'react';
import Header from '../../components/Header/index.tsx';
import Navbar from '../../components/Navbar/index.tsx';
import Footer from '../../components/Footer/index.tsx';

import {
  Advantage,
  AdvantagesContainer,
  Container,
  IconContainer,
  MainContainer,
} from './styles.ts';

import {
  FaMedal,
  FaSearchDollar,
  FaTruck,
} from 'react-icons/fa';
import Products from './Products/index.tsx';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <MainContainer>
      <h2>Welcome to the best virtual store!</h2>
        <AdvantagesContainer>
          <Advantage>
            <IconContainer>
              <FaSearchDollar />
            </IconContainer>
            <h3>THE LOWEST PRICES</h3>
            <p>We have competent prices for all types of products.</p>
          </Advantage>

          <Advantage>
            <IconContainer>
              <FaTruck />
            </IconContainer>
            <h3>FAST DELIVERY</h3>
            <p>We ship your product as soon as your order is confirmed.</p>
          </Advantage>

          <Advantage>
            <IconContainer>
              <FaMedal />
            </IconContainer>
            <h3>QUALITY PRODUCTS</h3>
            <p>We work with the best suppliers in the segments.</p>
          </Advantage>
        </AdvantagesContainer>
        <Products />
      </MainContainer>
      <Footer />
    </Container>
  )
}
export default Home;