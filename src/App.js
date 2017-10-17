import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './map'

class App extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 1
    }
  }

  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        <Map opacity={this.state.opacity}/>
        <div style={{position: 'absolute', bottom: '20%', zIndex: 10000}}>
          <button
            onClick={() => {
              this.setState({opacity: 0})
            }}

          >隐藏船只
          </button>
          <button
            onClick={() => {
              this.setState({opacity: 1})
            }}
            >显示船只
          </button>
        </div>

      </div>
    );
  }
}

export default App;
