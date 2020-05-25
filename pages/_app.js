import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import Store from "../store/Store";
import "../assets/scss/main.scss";
import "../assets/scss/responsive.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={Store}>
        <Component {...pageProps}></Component>
      </Provider>
    );
  }
}

const makeStore = () => Store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
