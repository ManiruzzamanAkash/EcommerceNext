import * as Types from "../../Types";

const initialState = {
  sliders: [],
  loading: false,
  error: null,
};

const SliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_SLIDERS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_SLIDERS:
      return {
        ...state,
        sliders: action.payload,
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

export default SliderReducer;
