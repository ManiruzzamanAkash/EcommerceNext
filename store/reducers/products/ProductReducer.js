import * as Types from "../../Types";

const initialState = {
  products: [],
  total: 0,
  loading: false,
  error: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        total: action.payload.total,
        loading: false,
        errors: null,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default ProductReducer;
