import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import FAQs from "../FAQs/FAQs";
import HomeServicesSec from "../HomeServicesSec/HomeServicesSec";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeServicesSec></HomeServicesSec>
      <About></About>
      <FAQs></FAQs>
    </div>
  );
};

export default Home;
