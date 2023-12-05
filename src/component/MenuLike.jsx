import React, { useState } from "react";

export default function MenuLike() {
  const [count, countSum] = useState(0);
  const clickLikeThumb = () => {
    alert("하위");
  };
  return (
    <>
      <div className="section-emotion">
        <div className="section-count">{count}</div>
        <div>
          <img
            className="section-thumb"
            src="https://static.thenounproject.com/png/2473091-200.png"
            onClick={() => {
              countSum((prev) => prev + 1);
            }}
          ></img>
        </div>
      </div>
    </>
  );
}
