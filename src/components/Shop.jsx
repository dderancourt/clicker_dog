import React from "react";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: {
        food: 0,
        toy: 0
      }
    };
  }

  addFood() {
    let newFood = this.state.inventory.food + 1;
    this.setState({
      inventory: { food: newFood }
    });
    this.props.callbackDataInventory(newFood);
  }

  addToy() {
    let newToy = this.state.inventory.toy + 1;
    this.setState({
      inventory: { food: newToy }
    });
  }

  render() {
    return (
      <div>
        <div id="food">
          <button
            onClick={() => {
              this.addFood();
            }}
          >
            Buy food
          </button>
        </div>
        <div id="toy">
          <button
            onClick={() => {
              this.addToy();
            }}
          >
            Buy toy
          </button>
        </div>
      </div>
    );
  }
}

export default Shop;
