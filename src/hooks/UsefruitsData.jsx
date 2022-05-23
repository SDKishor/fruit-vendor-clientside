import React, { useEffect, useState } from "react";

export const UsefruitsData = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  console.log(fruits);
  return [fruits, setFruits];
};
