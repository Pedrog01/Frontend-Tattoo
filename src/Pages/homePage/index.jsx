import React from "react";
import Footer from "../../Components/Footer";
import Header from "../Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="all-center">
          <div className="letter-color">
            <h1>Bring tattoo to life</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
