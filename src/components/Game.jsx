import React from "react";
import Shop from "./Shop";
import Inventory from "./Inventory";
import Dog from "./Dog";
import "./game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lovePerSecond: 0,
      inventory: {
        food: 0,
        toy: 0
      }
    };
    this.callbackFood = this.callbackFood.bind(this);
  }

  callbackFood(data) {
    this.setState({
      inventory: {
        food: data.food,
        toy: data.toy
      }
    });
  }

  getLovePerSec() {
    let newLovePerSec =
      this.state.inventory.food * 1 + this.state.inventory.toy * 10;
    this.setState({
      lovePerSecond: newLovePerSec
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.getLovePerSec();
    }, 1);
  }

  render() {
    return (
      <div id="game">
        <Shop callbackFood={this.callbackFood} />
        <Dog incomingLove={this.state.lovePerSecond} />
        <Inventory inventory={this.state.inventory} />
      </div>
    );
  }
}

export default Game;

/*<button
  onClick={event => {
    this.addItemInInventory();
  }}
></button>;*/
