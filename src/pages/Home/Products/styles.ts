import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  margin-top: 32px;
  background-color: #ecf6f6;
  padding-bottom: 92px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 320px;

  padding: 16px;

  border: 4px solid #dff0f0;
  border-radius: 16px;
  background-color: white;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;
  margin-bottom: 12px;

  color: #09121b;

  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  
  width: 200px;
  height: 200px;

  padding: 32px;

  > img {
    object-fit: contain;
    max-width: 100%;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 90%;
  margin: 8px 0px;

  > span {
    font-weight: 600;
  }
`;

export const Price = styled.p`
  font-size: 32px;
  font-weight: 500;
`;

export const StarIcon = styled.span`
  > * {
    color: orange;
  }
`;

export const BuyButton = styled.button`
  width: 90%;
  padding: 12px;

  background-color: #3d80bf;
  border: none;
  border-radius: 4px;

  color: whitesmoke;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;