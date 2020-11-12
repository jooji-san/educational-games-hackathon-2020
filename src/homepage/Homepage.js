import React from 'react';
import LanguageBar from './LanguageBar';

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="header">
          <h1>Tale Adventure</h1>
          <h3>
            {' '}
            This is a game where you will have an incredible voyage and learn a
            new language.
          </h3>
          {/* <img></img> */}
        </div>

        <div className="gradient-line"></div>

        <LanguageBar
          title="Learn Georgian 🇬🇪"
          handleClick={this.props.handleClick}
        />

        <LanguageBar title="ისწავლე ინგლისური 🇺🇸" />
      </div>
    );
  }
}

export default Homepage;
