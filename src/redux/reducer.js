import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionsTypes";

const initialState = {
  products: [],
  cart: [],
  fetching: false,
};
const findCartItemIndex = (cart, productId) => {
  return cart.findIndex((item) => item.id === productId);
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };
    case ADD_TO_CART:
      const addedProduct = action.payload;
      const existingCartItemIndex = findCartItemIndex(
        state.cart,
        addedProduct.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingCartItemIndex].quantity += 1;

        return { ...state, cart: updatedCart };
      } else {
        const newCartItem = { ...addedProduct, quantity: 1 };
        return { ...state, cart: [...state.cart, newCartItem] };
      }
    case REMOVE_FROM_CART:
      const removedProductId = action.payload;
      const updatedCart = state.cart.filter(
        (item) => item.id !== removedProductId
      );
      return { ...state, cart: updatedCart };
    case INCREASE_QUANTITY:
      const increasedProductId = action.payload;
      const increasedCartItemIndex = findCartItemIndex(
        state.cart,
        increasedProductId
      );
      const increasedCart = [...state.cart];

      if (increasedCartItemIndex !== -1) {
        increasedCart[increasedCartItemIndex] = {
          ...increasedCart[increasedCartItemIndex],
          quantity: increasedCart[increasedCartItemIndex].quantity + 1,
        };

        return { ...state, cart: increasedCart };
      }

      return state;

    case DECREASE_QUANTITY:
      const decreasedProductId = action.payload;
      const decreasedCartItemIndex = findCartItemIndex(
        state.cart,
        decreasedProductId
      );
      const decreasedCart = [...state.cart];

      if (decreasedCartItemIndex !== -1) {
        decreasedCart[decreasedCartItemIndex] = {
          ...decreasedCart[decreasedCartItemIndex],
          quantity: decreasedCart[decreasedCartItemIndex].quantity - 1,
        };

        if (decreasedCart[decreasedCartItemIndex].quantity === 0) {
          decreasedCart.splice(decreasedCartItemIndex, 1);
        }

        return { ...state, cart: decreasedCart };
      }

      return state;

    default:
      return state;
  }
};

export default rootReducer;
