import Layout from "@/components/Layout";
import React from "react";
import Hero from "./Hero";
import Monitor from "./Monitor";
import Tracker from "./Tracker";
import Features from "./Features";
import Steps from "./Steps";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import GetStarted from "./GetStarted";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Monitor />
      <Tracker />
      <Features />
      <Steps />
      <Testimonials />
      <WhyChooseUs />
      <GetStarted />
    </Layout>
  );
};

export default Home;
