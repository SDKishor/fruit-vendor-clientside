import React, { useEffect, useState } from "react";

export const UsefruitsData = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-fortress-30309.herokuapp.com/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return [fruits, setFruits];
};
