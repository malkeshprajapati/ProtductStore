import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "./carousel";
import {
  Card,
  ImageContainer,
  ProductImage,
} from "../../styles/singleProductStyle";
import useApiRequest from "../../htttpClient";
import Reviews from "./reviews";
import CardDetail from "./cardDetail";
import { useDispatch, useSelector } from "react-redux";
import { setProductDetail } from "../../features/productSlice";

const ProductCard = () => {
  const { id } = useParams();
  const { detailProduct } = useSelector((state) => state.products);
  const [product, setProduct] = useState();
  const [todo, setTodo] = useState({});
  const apiRequest = useApiRequest();

  const dispatch = useDispatch();

  const apiCall = async () => {
    if (id) {
      const productDetail = await apiRequest(`products/${id}`);
      setProduct(productDetail);

      const random = Math.floor(Math.random() * 151) + 1;

      const todo = await apiRequest(`todos/${random}`);
      const quote = await apiRequest(`quotes/${random}`);
      setTodo({ ...todo, ...quote });
    }
  };

  useEffect(() => {
    apiCall();
  }, [id]);

  return product ? (
    <>
      <Card>
        <ImageContainer>
          {product.images.length > 1 ? (
            <ImageCarousel images={product.images} />
          ) : (
            <ProductImage src={product.images[0]} alt={product.title} />
          )}
        </ImageContainer>
        <CardDetail product={product} />
      </Card>
      <Reviews reviewsData={product.reviews} />
    </>
  ) : (
    <Card>
      <ImageContainer>
        <h1>Loading...</h1>
      </ImageContainer>
    </Card>
  );
};

export default ProductCard;
