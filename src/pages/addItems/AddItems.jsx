import React from "react";
import "./addItems.css";
import { useForm } from "react-hook-form";

export const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "https://enigmatic-fortress-30309.herokuapp.com/additems";
    let temp = data;
    temp.sold = 0;
    temp.price = `$${data.price}`;
    console.log(temp);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(temp),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="addItemPage">
      <form className="addItemForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Vendor Name"
          {...register("vendor", { required: true, maxLength: 80 })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="text"
          placeholder="Fruit Name"
          {...register("Fruit", { required: true, maxLength: 12 })}
        />
        <input
          type="url"
          placeholder="Fruit image (URL)"
          {...register("image", { required: true })}
        />
        <input
          type="number"
          placeholder="quantity"
          {...register("quantity", { required: true })}
        />
        <input
          type="number"
          placeholder="price"
          {...register("price", { required: true })}
        />
        <textarea placeholder="Descriptions" {...register("description")} />

        <button type="submit">ADD ITEMS</button>
      </form>
    </div>
  );
};
