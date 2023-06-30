import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";

function home() {
  return (
    <Layout props={{ marginTop: "70px" }}>
      <Header />
    </Layout>
  );
}

export default home;
