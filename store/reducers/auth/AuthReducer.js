import * as Types from "../../Types";

// Initial state
const initialState = {
  isLoggedIn: false,
  userData: {},
  tokenData: "",
  loginMessage: "",
  registerMessage: "",
  isLoading: false,
  isLoadingRegister: false,
  registrationStatus: false,
  redirected_route: null,
};

const AuthReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.AUTH_LOGIN_CHECK:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userData: action.payload.userData,
        tokenData: action.payload.tokenData,
        loginMessage: action.payload.loginMessage,
        isLoading: action.payload.isLoading,
      };

    case Types.AUTH_GET_LOGIN_DATA:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userData: action.payload.userData,
        tokenData: action.payload.tokenData,
      };

    case Types.AUTH_POST_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        tokenData: "",
        userData: {},
        loginMessage: "",
        isLoading: false,
      };

    default:
      break;
  }
  return newState;
};

export default AuthReducer;
