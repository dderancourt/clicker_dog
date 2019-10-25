import React from "react";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <p>{this.props.inventory.food} foods</p>
        <p>{this.props.inventory.toy} toys</p>
        <p>{this.props.inventory.basket} baskets</p>
        <p>{this.props.inventory.female_dog} female dogs</p>
        <p>{this.props.inventory.slave_cat} slave cats</p>
        <p>{this.props.inventory.parc} parc</p>
      </div>
    );
  }
}

export default Inventory;
