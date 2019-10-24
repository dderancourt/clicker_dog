import React from "react";
import Shop from "./Shop";
import Inventory from "./Inventory";
import Dog from "./Dog";
import "./game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lovePerSecond: 1,
      numberOfFood: 0
    };
  }

  render() {
    return (
      <div id="game">
        <Shop />
        <Dog incomingLove={this.state.lovePerSecond} />
        <Inventory />
      </div>
    );
  }
}

export default Game;
