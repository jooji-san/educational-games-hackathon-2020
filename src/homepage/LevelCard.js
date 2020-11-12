import React from 'react';

class LevelCard extends React.Component {
  render() {
    return (
      <div className={`level-card ${this.props.locked ? 'locked' : ''}`} onClick={this.props.handleClick}>
        <h1>{this.props.num}</h1>
      </div >
    );
  }
}

export default LevelCard;