import React from "react";

export default function MenuSticker({ is }) {
  let src = "";
  let alt = "";

  if (is == "popular") {
    src = "https://www.yupdduk.com/images/menu/2020_hoticon.png";
    alt = "인기메뉴";
  } else if (is == "recommd") {
    src = "https://www.yupdduk.com/images/menu/2020_recommandicon.png";
    alt = "추천메뉴";
  } else return;

  return (
    <div className="sticker">
      <img className="sticker-photo" src={src} alt={alt}></img>
    </div>
  );
}
