import React from "react";
import "./Inventory.scss";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inventory">
        <div className="inventory-title">
          <img src="dog-icon.gif" alt="dog"></img>
          <h2>Inventory</h2>
          <img src="dog-icon.gif" alt="dog"></img>
        </div>
        <div className="inventory-list">
          <p>{this.props.inventory.food} foods</p>
          <p>{this.props.inventory.toy} toys</p>
          <p>{this.props.inventory.basket} baskets</p>
          <p>{this.props.inventory.female_dog} female dogs</p>
          <p>{this.props.inventory.slave_cat} slave cats</p>
          <p>{this.props.inventory.parc} parc</p>
        </div>
        <div className="bottom-inventory-pic">
          <img src="swimming-dog.gif" alt="dog"></img>
        </div>
      </div>
    );
  }
}

export default Inventory;
