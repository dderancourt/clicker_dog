import React from "react";
import Food from "./Inventory/Food";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberFood: 1
    };
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <Food numberFood={this.state.numberFood} />
      </div>
    );
  }
}

export default Inventory;
