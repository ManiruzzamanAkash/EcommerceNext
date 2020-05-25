import * as Types from "../../Types";
import axios from "axios";
import { API_GET_PRODUCTS } from "../../ApiEndpoint";

export const fetchProducts = (page = 1, paginate = 24) => async (dispatch) => {
  dispatch({ type: Types.GET_PRODUCTS_LOADING, payload: true });
  const res = await axios.get(
    `${API_GET_PRODUCTS}?page=${page}&paginate=${paginate}`
  );
  const payloadData = {
    data: res.data.data.data,
    total: res.data.data.total,
  };
  dispatch({ type: Types.GET_PRODUCTS, payload: payloadData });
};
