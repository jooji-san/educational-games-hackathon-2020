import React from 'react';

class Choice extends React.Component {
  render() {
    const isTrue = this.props.isTrue;
    return (
      <div className="choice">
        <div
          className="checkbox"
          onClick={(e) => this.props.handleClickCheckbox(isTrue, e)}
        ></div>
        <div>{this.props.choiceText}</div>
      </div>
    );
  }
}

export default Choice;
