import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 64px;

  background-color: #3d3fbf;
  color: whitesmoke;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 1600px;
  height: 100%;

  > div {
    display: flex;
    width: 70%;
    justify-content: space-between;
  }

  > * {
    width: 320px;
  }

  @media (max-width: 1280px) {
    > * {
      width: 200px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;

    > div {
      justify-content: flex-end;
      width: 95%;
      margin-left: 32px;
      gap: 16px;
    }
  }
`;

export const Title = styled.h1`
  margin-left: 48px;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 640px;

  > * {
    border: none;
    height: 36px;
  }

  > input {
    width: 100%;
    padding: 0px 8px;
    border-radius: 4px;
    font-size: 16px;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    background: none;
    color: whitesmoke;
    font-size: 24px;
  }

  > button:hover {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    min-width: auto;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-right: 48px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 16px;

    background: none;
    
    border: whitesmoke;
    color: whitesmoke;

    font-size: 24px;
  }

  > button:hover {
    cursor: pointer;
  }

  @media (max-width: 768px ) {
    width: 32px;
    margin-right: 24px;
    > input {
      display: none;
    }
  }
`;