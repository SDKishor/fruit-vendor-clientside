import React from "react";
import "./fruititem.css";
import { useNavigate } from "react-router-dom";

export const FruitItem = ({
  _id,
  vendor,
  price,
  description,
  image,
  quantity,
  Fruit,
}) => {
  const navigate = useNavigate();

  const proccedToInventory = () => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div className="fruits">
      <div className="fruitimage">
        <img src={image} alt="" />
      </div>
      <h3 className="serviceTitle">{Fruit}</h3>
      <h3>Price: {price} </h3>
      <p>{description}</p>
      <button onClick={proccedToInventory}>Manage</button>
    </div>
  );
};
