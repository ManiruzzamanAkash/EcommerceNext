import React from "react";
import MainLayout from "../components/layouts/Layout";
import Slider from "../components/page-partials/homepage/slider/slider";
import ProductList from "../components/page-partials/products/product-list/ProductList";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <Slider />
        {/* Products */}
        <div className="site-main-content">
          <ProductList />
        </div>
      </MainLayout>
    </>
  );
}
