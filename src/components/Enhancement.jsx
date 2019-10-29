import React from "react";
import "./Enhancement.scss";

class Enhancement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="enhancement">
        <h2>Enhancement</h2>
        <div className="enhancement-list">
          <button>
            <p>ZIZI</p>
          </button>
          <button>
            <p>ZIZI</p>
          </button>
          <button>
            <p>ZIZI</p>
          </button>
          <button>
            <p>ZIZI</p>
          </button>
          <button>
            <p>ZIZI</p>
          </button>
          <button>
            <p>ZIZI</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Enhancement;
