import { combineReducers } from "redux";
import ProductReducer from "../reducers/products/ProductReducer";
import SliderReducer from "./sliders/SliderReducer";
import CartReducer from "./orders/CartReducer";
import AuthReducer from "./auth/AuthReducer";

export default combineReducers({
  product: ProductReducer,
  slider: SliderReducer,
  cart: CartReducer,
  auth: AuthReducer,
});
