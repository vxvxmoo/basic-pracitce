import React from "react";
import MenuSticker from "./MenuSticker";
import MenuLike from "./MenuLike";

export default function Menu({ image, name, price, is }) {
  return (
    <>
      <div className="menu-card">
        <img className="menu-photo" src={image} alt="nature" />
        <h1>{name}</h1>
        <p>{price}원</p>
        <MenuSticker is={is} />
        <MenuLike />
      </div>
    </>
  );
}
