import Layout from "@/components/Layout";
import React from "react";
import Header from "./Header";
import PricngDetail from "./PricngDetail";
import WhyChooseUs from "../Home/WhyChooseUs";
import Steps from "../Home/Steps";

const Pricing = () => {
  return (
    <Layout>
      <Header />
      <PricngDetail />
      <Steps />
      <WhyChooseUs />
    </Layout>
  );
};

export default Pricing;
