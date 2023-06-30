import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import BgHeader from "../components/Header/BgHeader";

function home() {
  return (
    <Layout props={{ paddingTop: "70px", position: "relative" }}>
      <BgHeader />
      <Header />
      <Main />
    </Layout>
  );
}

export default home;
