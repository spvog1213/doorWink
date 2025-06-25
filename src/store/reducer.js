export const initialState = {
  visiblePage: "main",
  checkouted: false,
  cartList: [],
};

export const ACTION_TYPE = {
  select: "SELECT_MENU",
  main: "VISIBLE_MAIN",
  cart: "VISIBLE_CART",
  checkout: "CHECKOUT",
  increase: "COUNT_INCREASE",
  decrease: "COUNT_DECREASE",
};

export default function cartReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.select: 
      return {
        ...state,
        cartList: action.cartList
      }
    case ACTION_TYPE.cart: 
      return {
        ...state,
        visiblePage: "cart"
      }
    case ACTION_TYPE.main: 
      return {
        ...state,
        checkouted: false,
        visiblePage: "main"
      }
    case ACTION_TYPE.checkout: 
      return {
        ...state,
        cartList: [],
        checkouted: true
      }
    case ACTION_TYPE.increase: 
      return {
        ...state,
        cartList: action.cartList
      }
    case ACTION_TYPE.decrease: 
      return {
        ...state,
        cartList: action.cartList
      }
    default: return state;
  }
}