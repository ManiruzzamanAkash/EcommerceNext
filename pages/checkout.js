import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Router from "next/router";
import MainLayout from "../components/layouts/Layout";
import Checkout from "../components/page-partials/checkouts/checkout";
import { getAuthData } from "../store/actions/auth/LoginAction";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  let isLoggedIn = true;

  useEffect(() => {
    dispatch(getAuthData());
    if (!isLoggedIn) {
      localStorage.setItem("redirected_route", "/checkout");
      Router.replace("/login");
    }
  }, [isLoggedIn]);

  isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Head>
        <title>Checkouts | MyEcommerce</title>
      </Head>
      <MainLayout>
        <div className="site-main-content page-padding">
          <Checkout />
        </div>
      </MainLayout>
    </>
  );
}
