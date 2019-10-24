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
        food: 0
      }
    };
    this.callbackDataInventory = this.callbackDataInventory.bind(this);
  }

  callbackDataInventory(newFood) {
    this.setState({
      inventory: {
        food: newFood
      }
    });
  }

  getLovePerSec() {
    let newLovePerSec = 0;
    newLovePerSec = this.state.inventory.food * 1;
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
        <Shop callbackDataInventory={this.callbackDataInventory} />
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
