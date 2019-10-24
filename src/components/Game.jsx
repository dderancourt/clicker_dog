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
      Inventory: {
        food: 0,
        toys: 0
      }
    };
  }

  addItemInInventory() {
    let newFood = this.state.Inventory.food + 1;
    this.setState({
      Inventory: { food: newFood }
    });
  }

  getLovePerSec() {
    let newLovePerSec = 0;
    newLovePerSec = this.state.Inventory.food * 1;
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
        <button
          onClick={event => {
            this.addItemInInventory();
          }}
        ></button>
        <Shop />
        <Dog incomingLove={this.state.lovePerSecond} />
        <Inventory Inventory={this.state.Inventory} />
      </div>
    );
  }
}

export default Game;
