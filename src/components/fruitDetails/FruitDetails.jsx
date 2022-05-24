import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./fruitDetails.css";

export const FruitDetails = () => {
  const { fruitId } = useParams();
  const [fruit, setFruit] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${fruitId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, []);

  const handleRestock = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/inventory/${fruitId}`;
    const restockNum = e.target.restock.value;
    let temp = { quantity: 1 };
    temp.quantity = fruit.quantity + Number(restockNum);

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(temp),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setFruit({ ...fruit, quantity: temp.quantity });
  };

  const handelDelivary = (_id) => {
    const url = `http://localhost:5000/inventory/${_id}`;
    let temp = { quantity: 1 };
    temp.quantity = fruit.quantity - 1;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(temp),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setFruit({ ...fruit, quantity: temp.quantity });
  };

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
            <form onSubmit={handleRestock} className="restockContainer">
              <input placeholder="Item Number" type="number" name="restock" />
              <button type="submit">Restock</button>
            </form>
            <button
              onClick={() => handelDelivary(fruit._id)}
              className="deliveryBtn"
            >
              DELIVERED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
