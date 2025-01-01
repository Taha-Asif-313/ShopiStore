"use client";
import { createContext, useState } from "react";

// Create the context
export const ProductContext = createContext();

// Create the provider
export const ProductProvider = ({ children }) => {
  const [selectedProduct, setselectedProduct] = useState();
  const [allProducts, setallProducts] = useState();

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setselectedProduct,
        allProducts,
        setallProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
