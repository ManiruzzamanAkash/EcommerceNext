import React from "react";
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
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

const HeaderMenu = () => {
  return (
    <>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
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

          <Menu.Item key="4">
            <GiftOutlined />
            Offers
          </Menu.Item>

          <Menu.Item key="5">
            <Link href="/carts">
              <a>
                <ShoppingCartOutlined /> Cart
                <Badge count={5}>&nbsp;&nbsp;&nbsp;</Badge>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <SendOutlined />
            Contact Us
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default HeaderMenu;
