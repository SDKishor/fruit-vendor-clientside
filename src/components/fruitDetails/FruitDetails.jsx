import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./fruitDetails.css";

export const FruitDetails = () => {
  const { fruitId } = useParams();
  console.log(fruitId);
  const [fruit, setFruit] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${fruitId}`;

    fetch(url, {})
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, []);
  console.log(fruit);
  return (
    <div className="FruitDetails">
      <div className="fruitContainer">
        <div className="imageContainer">
          <img src={fruit.image} alt="" />
          <div className="fruitName">
            <h1>{fruit.Fruit}</h1>
            <h3>{fruit.price}</h3>
          </div>
        </div>
        <div className="contentContainer">
          <div className="info">
            <div className="vendorinfo">
              <div className="vendorImg">
                <img src={fruit.vendor_image} />
              </div>
              <div className="vendordateils">
                <h2>Vendor: {fruit.vendor}</h2>
                <h3> {fruit.email}</h3>
              </div>
            </div>
            <div className="description">
              <h2>{fruit.description}</h2>
            </div>
            <div className="stockInfo">
              <div className="option">
                <h3>Quantity</h3>
                <h4>{fruit.quantity} kg</h4>
              </div>
              <div className="option">
                <h3>Sold</h3>
                <h4>{fruit.sold}</h4>
              </div>
            </div>
          </div>
          <div className="btnContainer">
            <div className="restockContainer">
              <input type="number" />
              <button type="submit">Restock</button>
            </div>
            <button className="deliveryBtn">DELIVERED</button>
          </div>
        </div>
      </div>
    </div>
  );
};
