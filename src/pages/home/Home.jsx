import React from "react";
import { Footer } from "../../components/footer/Footer";
import "./home.css";

export const Home = () => {
  return (
    <div className="homePage">
      <div className="banner">
        <h2>Fruit is Nature's Candy.</h2>
      </div>

      <div className="key_features">
        <div className="features">
          <div className="option">
            <h3>Delivery</h3>
            <p>fast delivery</p>
          </div>
          <div className="option">
            <h3>Great choice</h3>
            <p>choose by professionals</p>
          </div>
          <div className="option">
            <h3>Freash Only</h3>
            <p>100% Guaranty quality</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
