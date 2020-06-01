import React from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/Layout";
import LoginForm from "../components/page-partials/auth/login/LoginForm";

export default function loginPage() {
  return (
    <>
      <Head>
        <title>Contact Us | MyEcommerce</title>
      </Head>
      <MainLayout>
        <div className="site-main-content page-padding">
          <h2>Contact Us</h2>
        </div>
      </MainLayout>
    </>
  );
}
