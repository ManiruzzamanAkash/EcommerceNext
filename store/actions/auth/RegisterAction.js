import * as Types from "../../Types";
import * as JwtDecode from "jwt-decode";
// import { generateToken } from "../../services/token/TokenService";

import axios from "axios";
import { API_POST_REGISTER } from "../../ApiEndpoint";

export const registerAction = (registerData) => async (dispatch) => {
  console.log("registerData", registerData);
  return 1;
  let loginResponse = {
    userData: {},
    tokenData: {},
    isLoggedIn: false,
    loginMessage: "",
    isLoading: false,
  };

  try {
    loginResponse.isLoading = true;
    dispatch({ type: Types.AUTH_REGISTER, payload: loginResponse });

    const res = await axios.post(`${API_POST_REGISTER}`, registerData);
    // Successfully Logged in
    loginResponse = {
      userData: res.data.user,
      tokenData: res.data.access_token,
      isLoggedIn: res.data.status,
      loginMessage: res.data.message,
      isLoading: false,
    };
    localStorage.setItem("loginData", JSON.stringify(loginResponse));
    dispatch({ type: Types.AUTH_REGISTER, payload: loginResponse });
  } catch (error) {
    // loginResponse
    dispatch({ type: Types.AUTH_REGISTER, payload: loginResponse });
  }
};
