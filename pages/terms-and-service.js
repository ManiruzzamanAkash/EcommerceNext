import React from "react";
import MainLayout from "../components/layouts/Layout";
import Slider from "../components/page-partials/homepage/slider/slider";
import ProductList from "../components/page-partials/products/product-list/ProductList";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Head from "next/head";
import PageTitle from "../components/layouts/page/PageTitle";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <div className="site-main-content page-padding">
          <PageTitle title="Terms and Service" />
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            quas ex, dolor dignissimos, recusandae dolorem aut eligendi
            voluptates pariatur saepe cumque eaque aliquid, deserunt delectus
            obcaecati reiciendis et est suscipit!
          </Paragraph>
        </div>
      </MainLayout>
    </>
  );
}
