import React from "react";
import Food from "./Shop/Food";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Food />
      </div>
    );
  }
}

export default Shop;
