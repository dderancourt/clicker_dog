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
      </div>
    );
  }
}

export default Shop;
