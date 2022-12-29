import React, { useEffect, useReducer } from "react";
import ShoppingCartReducer from "../../reducers/ShoppingCartReducer";
import Cart from "./Cart";
import ProductList from "./ProductList";
const initialState = {
  products: [],
  cart: [],
};

function ShoppingCart() {
  const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const { products } = await res.json();
    dispatch({ type: "ADD_ALL_PRODUCTS", payload: products });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="shoppingCart">
      <ProductList state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default ShoppingCart;
