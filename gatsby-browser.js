import React from "react";
import { getKbuttaProducts } from "./src/api/multiVendor";

import { CartProvider } from "./src/components/products/context/cart.context";

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
);
