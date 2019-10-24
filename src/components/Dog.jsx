import React from "react";

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="clickerDog.png" alt="Dog" />
      </div>
    );
  }
}

export default Dog;
