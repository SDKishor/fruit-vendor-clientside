import React from "react";
import "./addItems.css";
import { useForm } from "react-hook-form";

export const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="addItemPage">
      <form className="addItemForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Vendor Name"
          {...register("vendor", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="text"
          placeholder="Fruit Name"
          {...register("Fruit Name", { required: true, maxLength: 12 })}
        />
        <input
          type="url"
          placeholder="Fruit image (URL)"
          {...register("Fruit image", { required: true })}
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
