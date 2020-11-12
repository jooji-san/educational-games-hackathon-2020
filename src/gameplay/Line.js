import React from 'react';

class Line extends React.Component {
  render() {
    return (
      <div className="line">
        <img
          src={this.props.image}
          alt="person avatar"
          className="person-icon"
        ></img>
        <div className="sentence">{this.props.text}</div>
      </div>
    );
  }
}

export default Line;
