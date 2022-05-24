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
          <h1 className="fruitName">{fruit.Fruit}</h1>
        </div>
        <div className="contentContainer">
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
        </div>
      </div>
    </div>
  );
};
