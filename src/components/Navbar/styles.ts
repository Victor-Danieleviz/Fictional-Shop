import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  
  background-color: #3d80bf;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1600px;
  height: 32px;

  > * {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 64px;
  }

  button {
    height: 100%;
    border: none;
    background: none;
    color: #fdfefe;
    font-weight: 400;
    font-size: 14px;
  }

  button:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media(max-width: 1600px) {
    width: 100vw;
  }

  @media (max-width: 1280px) {
    > * {
      gap: 32px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 96px;

    > * {
      width: 100vw;
      justify-content: center;
      margin: 0px 0px;
    }
  }
`;

export const ProductsContainer = styled.ul`
  justify-content: flex-start;
  margin-left: 128px;
  @media (max-width: 1280px) {
    margin-left: 64px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    gap: 48px;
    margin-left: 0px;
  }
`;

export const InfoContainer = styled.ul`
  justify-content: flex-end;
  margin-right: 128px;
  @media (max-width: 1280px) {
    margin-right: 64px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    gap: 48px;
    margin-right: 0px;
  }
`;