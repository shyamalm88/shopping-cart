import React, { useEffect, useState } from "react";

function Cart({ state, dispatch }) {
  const cart = state.cart;
  const [total, setTotal] = useState(0);
  const changeQnty = (id, qnty) => {
    dispatch({ type: "CHANGE_QNTY", payload: { id, qnty } });
  };
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        return acc + Number(curr.price) * curr.qnty;
      }, 0)
    );
  }, [cart]);

  return (
    <div className="Cart">
      <h2 style={{ textAlign: "center" }}>Cart Items</h2>

      {cart.length > 0 ? (
        cart.map((prod, i) => {
          return (
            <div className="individualItem" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <div className="details">
                <span>{prod.title}</span>
                <div className="itemCounter">
                  <button onClick={() => changeQnty(prod.id, prod.qnty + 1)}>
                    +
                  </button>
                  <span>{prod.qnty}</span>
                  <button onClick={() => changeQnty(prod.id, prod.qnty - 1)}>
                    -
                  </button>
                </div>
                <span>₹ {prod.price}</span>
              </div>
            </div>
          );
        })
      ) : (
        <div style={{ textAlign: "center" }}>Cart is Empty</div>
      )}
      <strong className="total">
        <span>Sub Total</span>
        <span>{total && `₹ ${total}`}</span>
      </strong>
    </div>
  );
}

export default Cart;
