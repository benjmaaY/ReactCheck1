import React, { Component } from 'react';
import Every from './comp/every';
class App extends Component {
  changeTitle(title) {
    this.setState({ title })
  }

  render() {
    return <div>
        <Every />
      </div>;
  }
}

export default App;
