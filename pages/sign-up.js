import React from "react";
import Head from "next/head";
import MainLayout from "../components/layouts/Layout";
import RegisterForm from "../components/page-partials/auth/register/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Sign Up | MyEcommerce</title>
      </Head>
      <MainLayout>
        <div className="site-main-content page-padding">
          <RegisterForm />
        </div>
      </MainLayout>
    </>
  );
}
