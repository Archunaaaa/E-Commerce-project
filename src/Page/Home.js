import React from "react";
import Sliders from "../Components/Slider";
import Category from "../Components/Category";
import Arrival from "../Components/Arrival";
import Popular from "../Components/Popular";
import BestSeller from "../Components/BestSeller";
import Banner from "../Components/Banner";
import Brand from "../Components/Brand";
import ContactUs from "../Components/ContactUs";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Sliders />
        <Category />
        <Arrival />
        <Popular />
        <BestSeller />
        <Banner />
        <Brand />
      </div>
      <ContactUs />
    </>
  );
}
