import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { fetchProducts } from "../store/actions/products/ProductAction";
import HeaderMenu from "../components/layouts/Header/Header";
import MainLayout from "../components/layouts/Layout";

export default function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);

  console.log("products", products);

  return (
    <>
      <MainLayout>
        <div className="container">
          {console.log("products render", products)}
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <h1 className="title">
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <div>
              Count - {products.length}
              <br />
              {products.map((item) => (
                <div key={item.id} className="card card-body p-3 mt-2">
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </main>

          <footer></footer>
        </div>
      </MainLayout>
    </>
  );
}
