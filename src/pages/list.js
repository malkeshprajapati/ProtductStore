import React, { useEffect, useState } from "react";
import useApiRequest from "../htttpClient";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  ImageContainer,
  ListContainer,
  ListHeader,
  ListItemWrapper,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "../styles/listStyle";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { setLimit, setProducts } from "../features/productSlice";

const List = () => {
  const [loading, setLading] = useState(false);
  const { scrollRef } = useSelector((state) => state.layout);
  const { products, limit, search } = useSelector((state) => state.products);
  const apiRequest = useApiRequest();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/list/${id}`);
  };

  const apiCall = async () => {
    setLading(true);
    const data = await apiRequest(`products?limit=${limit}`);
    dispatch(setProducts(data?.products));
    setLading(false);
  };

  useEffect(() => {
    if (!search) {
      apiCall();
    }
  }, [limit, search]);

  useEffect(() => {
    const container = scrollRef;

    const handleScroll = _.debounce(() => {
      if (
        container.scrollTop + container.clientHeight >=
          container.scrollHeight - 100 &&
        !loading &&
        !search
      ) {
        dispatch(setLimit());
      }
    }, 500);

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loading]);

  return (
    <ListContainer>
      <ListHeader>Products ({products?.length})</ListHeader>
      <ListItemWrapper>
        {products
          ? products?.map((item) => (
              <Card key={item?.key} onClick={() => handleNavigation(item?.id)}>
                <ImageContainer>
                  <ProductImage
                    loading="lazy"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </ImageContainer>
                <CardContent>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>${item.price}</ProductPrice>
                </CardContent>
              </Card>
            ))
          : Array(6)
              .fill(0)
              .map((_, index) => (
                <Card key={index}>
                  <ImageContainer height="250px">
                    <h1>Loading..</h1>
                  </ImageContainer>
                </Card>
              ))}
      </ListItemWrapper>
    </ListContainer>
  );
};

export default List;
