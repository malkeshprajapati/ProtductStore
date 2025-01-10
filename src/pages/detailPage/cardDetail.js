import React from "react";
import {
  CardContent,
  DetailItem,
  ProductDescription,
  ProductDetails,
  ProductDiscount,
  ProductPrice,
  ProductTitle,
  Rating,
} from "../../styles/singleProductStyle";

const CardDetail = ({ product }) => {
  const discountedPrice = (
    product?.price -
    (product?.price * product?.discountPercentage) / 100
  ).toFixed(2);

  return (
    <CardContent>
      <ProductTitle>
        {product.title}
        <Rating>
          {"★".repeat(product.rating) + "☆".repeat(6 - product.rating)}
        </Rating>
      </ProductTitle>
      <ProductPrice>${discountedPrice}</ProductPrice>
      <ProductDiscount>${product.price}</ProductDiscount>
      <ProductDescription>{product.description}</ProductDescription>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ProductDetails>
          <DetailItem>
            <strong>Category:</strong> {product.category}
          </DetailItem>
          <DetailItem>
            <strong>Brand:</strong> {product.brand}
          </DetailItem>
          <DetailItem>
            <strong>SKU:</strong> {product.sku}
          </DetailItem>
          <DetailItem>
            <strong>Weight:</strong> {product.weight} g
          </DetailItem>
          <DetailItem>
            <strong>Warranty:</strong> {product.warrantyInformation}
          </DetailItem>
          <DetailItem>
            <strong>Shipping Info:</strong> {product.shippingInformation}
          </DetailItem>
          <DetailItem>
            <strong>Stock Status:</strong> {product.availabilityStatus} (
            {product.stock})
          </DetailItem>
          <DetailItem>
            <strong>Minimum Order Quantity:</strong>
            {product.minimumOrderQuantity}
          </DetailItem>
          <DetailItem>
            <strong>Return Policy:</strong> {product.returnPolicy}
          </DetailItem>
        </ProductDetails>
        <ProductDetails>
          <DetailItem>
            <strong>Dimensions:</strong> {product.dimensions.width} X
            {product.dimensions.height} X {product.dimensions.depth}
          </DetailItem>
          <DetailItem>
            <img src={product.meta.qrCode} />
          </DetailItem>
        </ProductDetails>
      </div>
    </CardContent>
  );
};

export default CardDetail;
