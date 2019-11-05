import React from "react";
import shopList from "../shopList";

function ShopItem(props) {
  return shopList.map(item => {
    return (
      <div id={item.name}>
        <button onClick={`props.get${item.name}FromShop`}>
          <img src={item.image} alt={item.name} />
          <p>
            Buy {item.name} (
            {new Intl.NumberFormat("fr", {
              notation: "compact"
            }).format(item.price)}{" "}
            <img src="heartIcon.png" alt="heart"></img>)
          </p>
        </button>
      </div>
    );
  });
}

export default ShopItem;
