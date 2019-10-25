import React from "react";

class Shop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="food">
          <button onClick={this.props.getFoodFromShop}>Buy food</button>
        </div>
        <div id="toy">
          <button onClick={this.props.getToyFromShop}>Buy toy</button>
        </div>
        <div id="basket">
          <button onClick={this.props.getBasketFromShop}>Buy basket</button>
        </div>
        <div id="female-dog">
          <button onClick={this.props.getFemaleDogFromShop}>
            Buy female dog
          </button>
        </div>
        <div id="slave-cat">
          <button onClick={this.props.getSlaveCatFromShop}>
            Buy slave cat
          </button>
        </div>
        <div id="parc">
          <button onClick={this.props.getParcFromShop}>Buy Parc</button>
        </div>
      </div>
    );
  }
}

export default Shop;
