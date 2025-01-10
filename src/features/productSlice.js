import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    limit: 54,
    search: false,
    detailProduct: null,
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setLimit: (state) => {
      state.limit = state.limit + 10;
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setProductDetail: (state, { payload }) => {
      state.detailProduct = payload;
    },
  },
});
export const { setProducts, setSearch, setLimit, setProductDetail } =
  productSlice.actions;
export default productSlice.reducer;
