import React from 'react';

class SelectWord extends React.Component {
  render() {
    const words = this.props.words;
    const correctNum = this.props.correctNum;

    return (
      <div>
        <h2>{this.props.questionTitle}</h2>
        {words.map((word, i) => {
          if (i === correctNum) {
            return (
              <div
                className="word"
                onClick={(e) => this.props.handleClickCheckbox(true, e)}
                key={i}
              >
                {word}
              </div>
            );
          } else {
            return (
              <div
                className="word"
                onClick={(e) => this.props.handleClickCheckbox(false, e)}
                key={i}
              >
                {word}
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default SelectWord;
