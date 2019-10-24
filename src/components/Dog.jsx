import React from "react";

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      love: 1
    };
  }

  sendDataToGame() {
    let dataDog = this.state.love;
    this.props.callBackDataDog(dataDog);
  }

  clicker() {
    let newLove = this.state.love + 1;
    this.setState({ love: newLove });
  }

  render() {
    return (
      <div className="dog">
        <div>you have {this.props.love} loves</div>
        <div>you generate {this.props.lovePerSecond} loves per second</div>
        <img
          src="clickerDog.png"
          alt="Dog"
          onClick={() => {
            {
              this.clicker();
              this.sendDataToGame();
            }
          }}
        />
      </div>
    );
  }
}

export default Dog;
