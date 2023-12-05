import React from "react";
import Menu from "./component/Menu";

export default function AppMenu() {
  const handleClick = (e) => {
    console.log(e);
    alert("집가고싶어여~~~~~~~~~~");
  };
  return (
    <>
      <button onClick={handleClick}>button</button>
      <div className="list">
        <div className="menu-list">
          <Menu
            image="https://www.yupdduk.com/images/menu/2020_hotmenuY01.png"
            name="엽기메뉴"
            price="14,000"
            is="popular"
          />
          <Menu
            image="https://www.yupdduk.com/images/menu/2021_hotmenuY11.png"
            name="로제메뉴"
            price="16,000"
          />
          <Menu
            image="https://www.yupdduk.com/images/menu/2023_hotmenuY14.png"
            name="마라메뉴"
            price="16,000"
          />
          <Menu
            image="https://www.yupdduk.com/images/menu/2022_hotmenuY13.png"
            name="짜장메뉴"
            price="16,000"
          />
          <Menu
            image="https://www.yupdduk.com/images/menu/2020_hotmenuY03.png"
            name="엽기닭볶음탕"
            price="24,000"
            is="recommd"
          />
          <Menu
            image="https://www.yupdduk.com/images/menu/2020_hotmenuY01_small.png"
            name="2인 엽기떡볶이"
            price="9,000"
          />
        </div>
      </div>
    </>
  );
}
