import React from "react";
import HomeDoC from "./components/HomeDoC";
import Banner from "./components/Banner";
import { Overview } from "./components/Overview";
import { LandSale } from "./components/LandSale";
import { CharacterNFT } from "./components/CharacterNFT";
import { ToastContainer } from "react-toastify";
import FAQ from "./components/FAQ";
import NeedHelp from "./components/NeedHelp";

const HomePage = () => {
  return (
    <div>
      <NeedHelp />
      <HomeDoC />
      <Banner />
      <Overview />
      <LandSale />
      <CharacterNFT />
      <FAQ />
      <ToastContainer />
    </div>
  );
};

export default HomePage;
