import React from "react";
import Shop from "./Shop";
import Inventory from "./Inventory";
import Dog from "./Dog";
import "./game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      love: 0,
      lovePerSecond: 0,
      inventory: {
        food: 0,
        toy: 0
      }
    };
    this.callbackFoodShop = this.callbackFoodShop.bind(this);
    this.callbackToyShop = this.callbackToyShop.bind(this);
    this.callBackDataDog = this.callBackDataDog.bind(this);
  }

  callBackDataDog(dataDog) {
    this.setState({ love: dataDog });
  }

  callbackFoodShop(dataFood) {
    this.setState({ inventory: { food: dataFood } });
  }

  callbackToyShop(dataToy) {
    this.setState({ inventory: { toy: dataToy } });
  }

  getLove() {
    this.getLovePerSec();
    let newLove = this.state.love + this.state.lovePerSecond;
    this.setState({ love: newLove });
  }

  getLovePerSec() {
    let totalFood = this.state.food * 1;
    let totalToy = this.state.toy * 10;
    let newLovePerSec = totalFood + totalToy;
    this.setState({
      lovePerSecond: newLovePerSec
    });
  }

  componentDidMount() {
    /*setInterval(() => {
      this.getLovePerSec();
    }, 100);*/
    setInterval(() => {
      this.getLove();
    }, 1000);
  }

  render() {
    return (
      <div id="game">
        <Shop
          callbackFoodShop={this.callbackFoodShop}
          callbackToyShop={this.callbackToyShop}
        />
        <Dog
          lovePerSecond={this.state.lovePerSecond}
          love={this.state.love}
          callBackDataDog={this.callBackDataDog}
        />
        <Inventory inventory={this.state.inventory} />
      </div>
    );
  }
}

export default Game;
