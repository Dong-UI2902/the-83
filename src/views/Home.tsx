import React from "react";
import Particle from "../components/Particle/Particle";
import Layout from "../components/Layout/Layout";

function home() {
  return (
    <Layout props={{ marginTop: "70px" }}>
      <Particle />
    </Layout>
  );
}

export default home;
