import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FruitItem } from "../../components/fruitItem/FruitItem";
import auth from "../../firebase.init";

import "./myItem.css";

export const MyItem = () => {
  const [fruits, setFruits] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("https://enigmatic-fortress-30309.herokuapp.com/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  return (
    <div className="myItemPage">
      {fruits.map(
        (fruit) =>
          fruit.email === user.email && (
            <FruitItem
              key={fruit._id}
              _id={fruit._id}
              Fruit={fruit.Fruit}
              image={fruit.image}
              description={fruit.description}
              price={fruit.price}
            />
          )
      )}
    </div>
  );
};
