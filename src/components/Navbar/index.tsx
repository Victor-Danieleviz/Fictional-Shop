import {
  Container,
  InfoContainer,
  ProductsContainer
} from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <ProductsContainer>
        <button>
          <a>Home</a>
        </button>
        <button>
          <a>Clothing</a>
        </button>
        <button>
          <a>Electronics</a>
        </button>
        <button>
          <a>Jewerely</a>
        </button>
      </ProductsContainer>
      <InfoContainer>
        <button>
          <a>About Us</a>
        </button>
        <button>
          <a>Contact Us</a>
        </button>
      </InfoContainer>
    </Container>
  )
}

export default Navbar;