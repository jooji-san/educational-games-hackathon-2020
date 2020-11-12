import React from 'react';

class Score extends React.Component {
  render() {
    return (
      <div className="score">
        {this.props.score} / {this.props.max}{' '}
      </div>
    );
  }
}

export default Score;
