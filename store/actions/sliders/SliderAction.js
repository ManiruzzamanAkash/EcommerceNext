import * as Types from "../../Types";
import axios from "axios";
import { API_GET_SLIDERS } from "../../ApiEndpoint";

export const fetchSliders = () => async (dispatch) => {
  dispatch({ type: Types.GET_SLIDERS_LOADING, payload: true });
  const res = await axios.get(API_GET_SLIDERS);
  dispatch({ type: Types.GET_SLIDERS, payload: res.data.data });
};
