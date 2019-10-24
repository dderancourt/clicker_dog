import React from "react";
import Food from "./Inventory/Food";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberFood: 0
    };
  }

  componentDidMount() {
    let newNumberFood = this.props.Inventory.food;
    this.setState({ numberFood: newNumberFood });
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <Food numberFood={this.props.Inventory.food} />
      </div>
    );
  }
}

export default Inventory;
