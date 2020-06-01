import * as Types from "../../Types";

const initialState = {
  carts: [],
  products: [],
  loading: false,
  loading_add: false,
  loading_update: false,
  add_message: "",
  delete_message: "",
  error: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.POST_CARTS_LOADING:
      return {
        ...state,
        loading_add: action.payload,
        add_message: "Item Added to the cart successfully",
      };
    case Types.EMPTY_CART_MESSAGE:
      return {
        ...state,
        add_message: "",
      };

    case Types.EMPTY_CART_DELETE_MESSAGE:
      return {
        ...state,
        delete_message: "",
      };

    case Types.GET_CARTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_CARTS:
      return {
        ...state,
        carts: action.payload.carts,
        products: action.payload.products,
        loading: false,
        errors: null,
      };

    case Types.POST_CARTS_DATA:
      return {
        ...state,
        carts: action.payload.carts,
        products: action.payload.products,
        loading_add: false,
        errors: null,
      };

    case Types.UPDATE_CARTS_DATA:
      return {
        ...state,
        carts: action.payload.carts,
        products: action.payload.products,
        errors: null,
      };

    case Types.DELETE_CARTS_DATA:
      return {
        ...state,
        carts: action.payload.carts,
        products: action.payload.products,
        errors: null,
        delete_message: "Cart Item has been deleted !",
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default CartReducer;
