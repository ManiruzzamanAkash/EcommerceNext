import React from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/Layout";
import LoginForm from "../components/page-partials/auth/login/LoginForm";

export default function loginPage() {
  return (
    <>
      <Head>
        <title>Login | MyEcommerce</title>
      </Head>
      <MainLayout>
        <div className="site-main-content page-padding">
          <LoginForm />
        </div>
      </MainLayout>
    </>
  );
}
