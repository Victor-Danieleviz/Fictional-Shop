import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
  
  width: 100vw;
  height: 256px;

  bottom: 0;
  position: relative;
  background-color: #3d3fbf;

  color: whitesmoke;

  font-weight: 300;
`;

export const BackButton = styled.button`
  width: 100vw;
  height: 48px;

  border: none;
  background-color: #3d80bf;

  color: whitesmoke;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 128px;

  max-width: 1600px;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 16px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: 8px;

  font-size: 12px;
  li:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;