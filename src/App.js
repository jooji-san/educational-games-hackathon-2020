import React from 'react';
import Homepage from './Homepage';
import Level from './Level';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomepage: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isHomepage) {
      this.setState({ isHomepage: false });
    } else {
      this.setState({ isHomepage: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.isHomepage ? <Homepage handleClick={this.handleClick} /> : <Level />}
      </div>
    );
  }
}

export default App;