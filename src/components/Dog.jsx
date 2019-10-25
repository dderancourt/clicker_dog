import React from "react";
import "./Dog.scss";

class Dog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dog">
        <div>you have {this.props.love} loves</div>
        <div>you generate {this.props.lovePerSecond} loves per second</div>
        <img
          src="breathingDog.gif"
          alt="Dog"
          onClick={this.props.getClickFromDog}
        />
      </div>
    );
  }
}

export default Dog;
