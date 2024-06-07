import React from "react";
import Reviews from "../components/Reviews";
import Navbar from "../components/Navbar";
import Header from "../components/header";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Header/>
      <title>Hospital Landing Page</title>
      <Reviews />
      <Footer />
    </main>
  );
};

export default IndexPage;
