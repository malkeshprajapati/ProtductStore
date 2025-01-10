import React, { useEffect, useState } from "react";
import {
  SearchButton,
  SearchContainer,
  SearchInput,
} from "../styles/searchStyles";
import useApiRequest from "../htttpClient";
import { useDispatch } from "react-redux";
import { setProducts, setSearch } from "../features/productSlice";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const apiRequest = useApiRequest();
  const handleSearch = async () => {
    if (query.length) {
      const search = await apiRequest(`products/search?q=${query}`);
      dispatch(setProducts(search.products));
      dispatch(setSearch(true));
    }
  };

  useEffect(() => {
    if (query.length < 1) {
      dispatch(setSearch(false));
    }
  }, [query]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default Search;
