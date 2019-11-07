import React from "react";
import ShopItem from "./ShopItem";
// import { connect } from "react-redux";
import "./shop.scss";

class Shop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shop">
        <ShopItem />
      </div>
    );
  }
}

export default Shop;
