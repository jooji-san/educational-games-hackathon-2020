import React from 'react';

class Words extends React.Component {
  render() {
    const words = this.props.words;
    const handleClickCheckbox = this.props.handleClickCheckbox;
    const answer = this.props.answer;

    return (
      <div className="words">
        {words.map((word, i) => {
          return (
            <div
              className="word"
              data-choicetext={word}
              onClick={(e) => handleClickCheckbox(answer, e)}
              key={i}
            >
              {word}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Words;
