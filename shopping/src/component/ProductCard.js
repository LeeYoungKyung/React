import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div>
      <img src={item?.img} />
      <div></div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>new</div>
    </div>
  );
};

export default ProductCard;
