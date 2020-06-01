import axios from "axios";

export const login = (loginData) => (dispatch) => {
  let loginData = {
    userName: "farid.corp",
    password: "tam@1234",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  //   let signIn = axios
  //     .post(api_signin_link, loginData, {
  //       headers: headers,
  //     })
  //     .then((res) => {
  //       console.log("login:", res);
  //       dispatch({ type: TOKEN_SERVICE, payload: loginData });
  //     });
};
