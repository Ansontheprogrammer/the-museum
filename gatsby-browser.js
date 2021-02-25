import React from "react";
import { CartProvider } from "./src/components/products/context/cart.context";

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
);
