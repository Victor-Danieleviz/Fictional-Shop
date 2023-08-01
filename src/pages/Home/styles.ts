import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background-color: white;
  max-width: 1600px;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 32px;
    margin-bottom: 32px;
    color: #3d80bf;
    font-size: 32px;
    text-align: center;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const AdvantagesContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 64px;
  height: 320px;

  text-align: center;

  @media (max-width: 1280px) {
    gap: 32px
  }

  @media (max-width: 480px) {
    gap: 16px
  }
`; 

export const Advantage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 32px;
  background-color: #ecf6f6;

  width: 440px;

  h3 {
    color: #3d80bf;
    font-size: 24px;
  }

  p {
    color: #1c3a56;
    max-width: 80%;
  }

  @media (max-width: 1600px) {
    width: 360px;
  }

  @media (max-width: 1280px) {
    width: 27%;
    min-width: 220px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    min-width: 96px;
    height: 256px;

    border-radius: 16px;

    h3 {
      display: flex;
      align-items: center;
      font-size: 12px;
      height: 32px;
    }
  }

  @media (max-width: 480px) {
    min-width: 64px;
    height: 128px;
    p {
      display: none;
    }
  }
`;

export const IconContainer = styled.section`
  color: #3d80bf;

  > * {
    width: 128px;
    height: auto;
  }

  @media (max-width: 768px) {
    > * {
      width: 48px;
    }
  }

  @media (max-width: 480px) {
    > * {
      width: 32px;
    }
  }
`;