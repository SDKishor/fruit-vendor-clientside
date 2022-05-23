import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { FruitItem } from "../../components/fruitItem/FruitItem";
import { UsefruitsData } from "../../hooks/UsefruitsData";
import "./home.css";

export const Home = () => {
  const navigate = useNavigate();

  const [fruits, setFruits] = UsefruitsData();
  const gotoInventory = () => {
    navigate("/inventory");
  };

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
      <div className="inventoryItems">
        <h2>Inventory Items</h2>
        <div className="items">
          {fruits.map(
            (fruit, index) =>
              index <= 5 && (
                <FruitItem
                  Fruit={fruit.Fruit}
                  image={fruit.image}
                  description={fruit.description}
                  price={fruit.price}
                />
              )
          )}
        </div>
        <button className="inventoryBtn" onClick={gotoInventory}>
          Manage Inventories
        </button>
      </div>
      <div className="subscribe">
        <h3>Get Interesting Facts</h3>
        <p>join our community and learn some interesting facts about fruits</p>
        <form className="subscribeform">
          <input type="email" name="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
