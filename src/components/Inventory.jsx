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
      </div>
    );
  }
}

export default Inventory;
