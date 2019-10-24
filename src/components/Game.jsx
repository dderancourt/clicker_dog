import React from "react";
import Shop from "./Shop";
import Inventory from "./Inventory";
import Dog from "./Dog";
import "./game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="game">
        <Shop />
        <Dog />
        <Inventory />
      </div>
    );
  }
}

export default Game;
