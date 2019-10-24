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

  sendData() {
    let data = this.state.inventory;
    this.props.callbackFood(data);
  }

  addFood() {
    let newFood = this.state.inventory.food + 1;
    this.setState({
      inventory: { food: newFood }
    });
  }

  addToy() {
    let newToy = this.state.inventory.toy + 1;
    this.setState({
      inventory: { toy: newToy }
    });
  }

  render() {
    return (
      <div>
        <div id="food">
          <button
            onClick={() => {
              this.addFood();
              this.sendData();
            }}
          >
            Buy food
          </button>
        </div>
        <div id="toy">
          <button
            onClick={() => {
              this.addToy();
              this.sendData();
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
