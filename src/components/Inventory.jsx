import React from "react";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <p>{this.props.inventory.food}</p>
      </div>
    );
  }
}

export default Inventory;
