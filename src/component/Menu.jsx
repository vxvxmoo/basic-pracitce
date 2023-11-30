import React from "react";
import MenuSticker from "./MenuSticker";

export default function Menu({ image, name, price, is }) {
  return (
    <>
      <div className="menuCard">
        <img className="menuPhoto" src={image} alt="nature" />
        <h1>{name}</h1>
        <p>{price}원</p>
        <MenuSticker is={is} />
      </div>
    </>
  );
}
