import React from "react";

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      love: 0,
      lovePerSec: 0
    };
  }

  clicker() {
    let newLove = this.state.love + 1;
    this.setState({ love: newLove });
  }

  render() {
    return (
      <div>
        <div>you have {this.state.love} love</div>
        <div>you generate {this.state.lovePerSec} love per second</div>
        <img
          src="clickerDog.png"
          alt="Dog"
          onClick={event => {
            {
              this.clicker();
            }
          }}
        />
      </div>
    );
  }
}

export default Dog;
