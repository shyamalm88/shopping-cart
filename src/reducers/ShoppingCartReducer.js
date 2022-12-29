const ShoppingCartReducer = function (state, action) {
  switch (action.type) {
    case "ADD_ALL_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCTS_TO_CART":
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
    case "CHANGE_QNTY":
      return {
        ...state,
        cart: state.cart.filter((x) =>
          x.id === action.payload.id ? (x.qnty = action.payload.qnty) : x.qnty
        ),
      };
    default:
      return state;
  }
};

export default ShoppingCartReducer;
