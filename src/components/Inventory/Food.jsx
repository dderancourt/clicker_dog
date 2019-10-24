import React from "react";

class Food extends React.Component {
  render() {
    return <div>{this.props.numberFood} food</div>;
  }
}

export default Food;
