import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./Layout.style";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Layout;
