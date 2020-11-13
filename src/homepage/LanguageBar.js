import React from 'react';
import LevelCard from './LevelCard';

class LanguageBar extends React.Component {
  render() {
    return (
      <div className="language-bar">
        <h3>{this.props.title}</h3>
        <div className="card-list">
          {this.props.titles.map((title, i) => {
            return (
              <LevelCard
                title={title}
                handleClick={this.props.handleClick}
                key={i}
              ></LevelCard>
            );
          })}
        </div>
      </div>
    );
  }
}

export default LanguageBar;
