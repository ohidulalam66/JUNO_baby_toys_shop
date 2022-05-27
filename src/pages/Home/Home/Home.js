import React from "react";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import DiscoverNow from "../DiscoverNow/DiscoverNow";
import PopularProducts from "../PopularProducts/PopularProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <ContactUs />
      <PopularProducts />
      <DiscoverNow />
      <CustomerReviews />
    </>
  );
};

export default Home;
