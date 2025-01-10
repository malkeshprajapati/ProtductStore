import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Layout from "./features/layoutSlice";
import Products from "./features/productSlice";
export const store = configureStore({
  reducer: combineReducers({
    layout: Layout,
    products: Products,
  }),
});
