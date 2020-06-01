import * as Types from "../../Types";
import * as JwtDecode from "jwt-decode";
// import { generateToken } from "../../services/token/TokenService";

import axios from "axios";
import { API_POST_LOGIN } from "../../ApiEndpoint";

export const loginAction = (loginData) => async (dispatch) => {
  let loginResponse = {
    userData: {},
    tokenData: {},
    isLoggedIn: false,
    loginMessage: "",
    isLoading: false,
  };

  try {
    loginResponse.isLoading = true;
    dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: loginResponse });

    const res = await axios.post(`${API_POST_LOGIN}`, loginData);
    // Successfully Logged in
    loginResponse = {
      userData: res.data.user,
      tokenData: res.data.access_token,
      isLoggedIn: res.data.status,
      loginMessage: res.data.message,
      isLoading: false,
    };
    localStorage.setItem("loginData", JSON.stringify(loginResponse));
    dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: loginResponse });
  } catch (error) {
    // loginResponse
    dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: loginResponse });
  }
};

export const getAuthData = () => async (dispatch) => {
  let data = getLoginData();
  if (data !== null && typeof data !== "undefined" && data !== "") {
    if (checkTokenExpired()) {
      data.userData = "";
      data.isLoggedIn = false;
      data.tokenData = "";
    }
  }
  dispatch({ type: Types.AUTH_GET_LOGIN_DATA, payload: data });
};

export const logoutUserData = () => (dispatch) => {
  localStorage.setItem("loginData", "");
  dispatch({ type: Types.AUTH_POST_LOGOUT, payload: true });
};

/**
 * checkTokenExpired
 *
 * Check if Jwt token is expred or not; true=>expired, false=>valid
 */
function checkTokenExpired() {
  var current_time = new Date().getTime() / 1000;
  let loginData = localStorage.getItem("loginData");
  let jwt = "";
  if (loginData !== null || typeof loginData !== "undefined") {
    loginData = JSON.parse(loginData);
    const token = loginData.tokenData;
    jwt = JwtDecode(token);
  }

  if (current_time > jwt.exp) {
    return true;
  }
  return false;
}

/**
 * getJwtToken
 *
 * Get jwt access token
 */
async function getJwtToken() {
  let loginData = localStorage.getItem("loginData");
  if (await !checkTokenExpired()) {
    return loginData.tokenData;
  } else {
    return null;
  }
}

function getLoginData() {
  let loginData = localStorage.getItem("loginData");
  if (
    loginData !== null &&
    typeof loginData !== "undefined" &&
    loginData != ""
  ) {
    loginData = JSON.parse(loginData);
  }
  return loginData;
}
