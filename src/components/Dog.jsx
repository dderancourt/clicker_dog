import React from "react";
import "./Dog.scss";

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canAnimate: false
    };
  }

  render() {
    return (
      <div className="dog">
        <div>you have {this.props.love} loves</div>
        <div>you generate {this.props.lovePerSecond} loves per second</div>
        <img
          className="dog-pic"
          src="breathingDog.gif"
          alt="Dog"
          onClick={this.props.getClickFromDog}
        ></img>
        <img
          src="heartIcon.png"
          alt="Heart"
          onClick={() => this.setState({ canAnimate: true })}
          onAnimationEnd={() => this.setState({ canAnimate: false })}
          className={this.state.canAnimate ? "heart" : "notHeart"}
        ></img>
      </div>
    );
  }
}

export default Dog;
