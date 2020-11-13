import React from 'react';

class LevelCard extends React.Component {
  render() {
    return (
      <div className="level-card" onClick={this.props.handleClick}>
        <div className="card-title">{this.props.title}</div>
      </div>
    );
  }
}

export default LevelCard;
