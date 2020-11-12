import React from 'react';
import LevelCard from './LevelCard';

class LanguageBar extends React.Component {
  render() {
    const cards = [];
    for (let i = 1; i < 7; i++) {
      if (i === 1) {
        cards.push(
          <LevelCard
            num={i}
            locked={false}
            handleClick={this.props.handleClick}
            key={i}
          ></LevelCard>
        );
      } else {
        cards.push(<LevelCard num={i} locked={true} key={i}></LevelCard>);
      }
    }

    return (
      <div className="language-bar">
        <h3>{this.props.title}</h3>
        <div className="card-list">{cards}</div>
      </div>
    );
  }
}

export default LanguageBar;
