import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "next/router";
import Link from "next/link";
import { Layout, Menu, Badge } from "antd";
const { Header } = Layout;
import {
  HomeOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  GiftOutlined,
  SendOutlined,
  AppstoreOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import CartCountBadge from "../../page-partials/carts/count-badge/CartCountBadge";
import {
  getAuthData,
  logoutUserData,
} from "../../../store/actions/auth/LoginAction";

const HeaderMenu = ({ router }, props) => {
  const dispatch = useDispatch();

  const getSelectedRoutes = () => {
    switch (router.pathname) {
      case "/":
        return "home";

      case "/carts":
        return "carts";

      case "/contacts":
        return "contacts";

      case "/login":
        return "login";

      default:
        return "";
    }
  };

  const [defaultSelectedKeys, setdefaultSelectedKeys] = useState([
    getSelectedRoutes(),
  ]);

  useEffect(() => {
    dispatch(getAuthData());
  }, [dispatch]);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userData = useSelector((state) => state.auth.userData);

  const handleClick = (e) => {
    switch (e.key) {
      case "logout":
        dispatch(logoutUserData());
        router.reload(window.location.pathname);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Header className="header">
        <div className="logo" />
        <Menu
          onClick={handleClick}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={defaultSelectedKeys}
        >
          <Menu.Item key="home">
            <Link href="/">
              <a>
                <HomeOutlined /> Home
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <AppstoreOutlined />
            Products
          </Menu.Item>

          <SubMenu icon={<MenuOutlined />} title="Category" key="3">
            <Menu.ItemGroup title="Fashion">
              <SubMenu title="Babies" key="3:1">
                <Menu.Item>Shirt</Menu.Item>
                <Menu.Item>Pant</Menu.Item>
                <Menu.Item>Frock</Menu.Item>
              </SubMenu>
              <SubMenu title="Gents" key="3:2">
                <Menu.Item>Shirt</Menu.Item>
                <Menu.Item>Pant</Menu.Item>
                <Menu.Item>T-Shirt</Menu.Item>
              </SubMenu>
              <SubMenu title="Ladies" key="3:3">
                <Menu.Item>Shirt</Menu.Item>
                <Menu.Item>Pant</Menu.Item>
                <Menu.Item>T-Shirt</Menu.Item>
              </SubMenu>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Electronics" key="3:4">
              <Menu.Item>Laptop/Computer</Menu.Item>
              <Menu.Item>Watch</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <Menu.Item key="offers">
            <GiftOutlined />
            Offers
          </Menu.Item>

          <Menu.Item key="carts">
            <Link href="/carts">
              <a>
                <ShoppingCartOutlined /> Cart
                <CartCountBadge />
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="contacts">
            <Link href="/contacts">
              <a>
                <SendOutlined />
                Contact Us
              </a>
            </Link>
          </Menu.Item>

          {!isLoggedIn && (
            <Menu.Item key="login">
              <Link href="/login">
                <a>
                  <LoginOutlined /> Login
                </a>
              </Link>
            </Menu.Item>
          )}

          {isLoggedIn && (
            <Menu.Item key="user_account">
              <Link href="">
                <a>{userData && userData.first_name}</a>
              </Link>
            </Menu.Item>
          )}
          {isLoggedIn && (
            <Menu.Item key="logout">
              <Link href="">
                <a>
                  <LoginOutlined /> Logout
                </a>
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
    </>
  );
};

export default withRouter(HeaderMenu);
