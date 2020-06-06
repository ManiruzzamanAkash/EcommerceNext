import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";

const MainMetaTags = ({ router }) => {
  const getMetaTitleTag = () => {
    const baseTitle = "My Ecommerce Store | A Free Online Ecommerce Store";
    switch (router.pathname) {
      case "/":
        return baseTitle;

      case "/carts":
        return `Carts - ${baseTitle}`;

      case "/contacts":
        return `Contact Us - ${baseTitle}`;

      case "/login":
        return `Sign In - ${baseTitle}`;

      case "/sign-up":
        return `Sign Up - ${baseTitle}`;

      case "/terms-and-service":
        return `Terms and Service - ${baseTitle}`;

      case "/privacy-policy":
        return `Privacy Policy - ${baseTitle}`;

      default:
        return baseTitle;
    }
  };

  return (
    <Head>
      <title>{getMetaTitleTag()}</title>
    </Head>
  );
};

export default withRouter(MainMetaTags);
