import React from 'react';

class Narrator extends React.Component {
  render() {
    return <div className="narrator">{this.props.text}</div>;
  }
}

export default Narrator;
