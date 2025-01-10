import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease;
  margin: 8px;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: ${({ height }) => height || "auto"};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;

const CardContent = styled.div`
  padding: 16px;
  background: #feffa7;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin: 0;
  font-weight: normal;
  line-height: 1.4;
`;
const ProductBrand = styled.p`
  font-size: 14px;
  color: #fffghg;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  color: #b12704;
  margin: 8px 0;
  font-weight: bold;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const ListHeader = styled.header`
  color: darkgray;
  position: fixed;
  z-index: 1;
  font-weight: bolder;
`;

export {
  ListContainer,
  ListItemWrapper,
  ListHeader,
  Card,
  ImageContainer,
  ProductImage,
  CardContent,
  ProductTitle,
  ProductBrand,
  ProductPrice,
  ProductRating,
};
