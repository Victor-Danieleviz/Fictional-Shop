import React from "react";

import { FaShoppingCart, FaSearch } from "react-icons/fa";

import {
  CartContainer,
  Container,
  HeaderContainer,
  SearchContainer,
  Title,
} from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <Title>FICTSHOP</Title>
        <div>
          <SearchContainer>
            <input type="text" placeholder="search products" />
            <button><FaSearch /></button>
          </SearchContainer>
          <CartContainer>
            <button><FaShoppingCart /></button>
          </CartContainer>
        </div>
      </Container>
    </HeaderContainer>
  )
};

export default Header;