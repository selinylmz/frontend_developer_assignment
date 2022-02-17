import React from "react";
import { useSelector } from "react-redux";
import LeftSide from "../LeftSide";
import Content from "../Content";
import "./index.scss";

const Layout = () => {
  const navMenu = useSelector((state) => state.sidebar);
  return (
    <main className={navMenu ? "main active" : "main"}>
      <LeftSide></LeftSide>
      <Content></Content>
    </main>
  );
};
export default Layout;
