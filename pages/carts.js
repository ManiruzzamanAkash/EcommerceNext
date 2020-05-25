import React from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/Layout";
import CartList from "../components/page-partials/carts/cart-list";

export default function Home(props) {
  console.log("props", props);
  return (
    <>
      <Head>
        <title>Carts | MyEcommerce</title>
      </Head>
      <MainLayout>
        <div className="site-main-content page-padding">
          <CartList />
        </div>
      </MainLayout>
    </>
  );
}
