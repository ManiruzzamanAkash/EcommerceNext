import React from "react";
import { Layout, BackTop } from "antd";
const { Content } = Layout;
import Head from "next/head";

import FooterMain from "./Footer/Footer";
import HeaderMenu from "./Header/Header";

const MainLayout = (props) => {
  return (
    <>
      <Head>
        <title>
          My Ecommerce Store | A Free Online Ecommerce Store For All
        </title>
      </Head>

      <Layout>
        <HeaderMenu />
        <Content style={{ minHeight: 530 }}>{props.children}</Content>
        <FooterMain />
        <BackTop />
      </Layout>
    </>
  );
};

export default MainLayout;
