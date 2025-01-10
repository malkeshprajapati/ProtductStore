import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 1000px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 450px;
  // overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 350px;
`;

const CardContent = styled.div`
  padding: 16px;
  // height: 100%;
`;

const ProductTitle = styled.h1`
  font-size: 22px;
  color: #333;
  margin: 0 0 10px;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  color: #b12704;
  margin: 10px 0;
  font-weight: bold;
`;

const ProductDiscount = styled.p`
  font-size: 16px;
  color: #111;
  text-decoration: line-through;
  margin: 5px 0;
`;

const ProductDetails = styled.div`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-top: 15px;
`;

const DetailItem = styled.p`
  margin: 5px 0;
`;

const Rating = styled.div`
  font-size: 1.2em;
  color: #f39c12;
  margin-bottom: 10px;
`;

export {
  Card,
  CardContent,
  DetailItem,
  ImageContainer,
  ProductDescription,
  ProductDetails,
  ProductDiscount,
  ProductImage,
  ProductPrice,
  ProductTitle,
  Rating,
};
