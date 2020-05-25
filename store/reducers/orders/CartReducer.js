import * as Types from "../../Types";

const initialState = {
  carts: [],
  totalCount: 0,
  totalItems: 0,
  loading: false,
  loading_add: false,
  add_message: "",
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

    case Types.GET_CARTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_CARTS:
      return {
        ...state,
        carts: action.payload.carts,
        total: action.payload.total,
        loading: false,
        loading_add: false,
        errors: null,
      };

    case Types.POST_CARTS_DATA:
      return {
        ...state,
        carts: action.payload.carts,
        totalCount: action.payload.totalCount,
        totalItems: action.payload.totalItems,
        loading_add: false,
        errors: null,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default CartReducer;
