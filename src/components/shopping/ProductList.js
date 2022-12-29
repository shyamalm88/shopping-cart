import React from "react";

function ProductList({ state, dispatch }) {
  const products = state.products;
  const handleAddToCart = (prod) => {
    dispatch({
      type: "ADD_PRODUCTS_TO_CART",
      payload: {
        title: prod.title,
        qnty: 1,
        price: prod.price,
        thumbnail: prod.thumbnail,
        id: prod.id,
      },
    });
  };
  const handleRemoveFromCart = (prod) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: prod.id,
    });
  };
  return (
    <>
      <div className="ProductList">
        {products.map((prod) => {
          return (
            <div className="productListing" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />

              <div className="details">
                <div className="title">{prod.title}</div>
                <div className="price">₹{prod.price}</div>
              </div>
              <div className="buttons">
                {state.cart.findIndex((x) => x.id === prod.id) >= 0 ? (
                  <button
                    className="Remove"
                    onClick={() => {
                      handleRemoveFromCart(prod);
                    }}
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    className="Add"
                    onClick={() => {
                      handleAddToCart(prod);
                    }}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
