import React from "react";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: {
        food: 1,
        toy: 1
      }
    };
  }

  sendFoodToGame() {
    let dataFood = this.state.inventory.food;
    this.props.callbackFoodShop(dataFood);
  }

  sendToyToGame() {
    let dataToy = this.state.inventory.toy;
    this.props.callbackToyShop(dataToy);
  }

  addFood() {
    let newFood = this.state.inventory.food + 1;
    this.setState({
      inventory: { food: newFood }
    });
    this.sendFoodToGame();
  }

  addToy() {
    let newToy = this.state.inventory.toy + 1;
    this.setState({
      inventory: { toy: newToy }
    });
    this.sendToyToGame();
  }

  render() {
    return (
      <div>
        <div id="food">
          <button
            onClick={() => {
              this.addFood();
              /* this.sendFoodToGame();*/
            }}
          >
            Buy food
          </button>
        </div>
        <div id="toy">
          <button
            onClick={() => {
              this.addToy();
              /*  this.sendToyToGame();*/
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
