import React from "react";

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      love: 0,
      lovePerSec: this.props.incomingLove
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.incomingLove();
    }, 1000);
  }

  incomingLove() {
    let addLove = this.state.love + this.props.incomingLove;
    this.setState({ love: addLove });
  }

  clicker() {
    let newLove = this.state.love + 1;
    this.setState({ love: newLove });
  }

  render() {
    return (
      <div className="dog">
        <div>you have {this.state.love} love</div>
        <div>you generate {this.props.incomingLove} love per second</div>
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
