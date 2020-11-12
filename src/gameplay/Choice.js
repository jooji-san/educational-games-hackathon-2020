import React from 'react';

class Choice extends React.Component {
  render() {
    return (
      <div className="choice">
        <div
          className="checkbox"
          data-choicetext={this.props.choiceText}
          data-question={this.props.question}
          onClick={(e) => this.props.handleClickCheckbox(this.props.answer, e)}
        ></div>
        <div>{this.props.choiceText}</div>
      </div>
    );
  }
}

export default Choice;
