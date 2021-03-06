import React from 'react';
import './App.css';
import cat from './cat.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: '', y: '' };
    this._onMouseMove = this._onMouseMove.bind(this);

  }
  
  _onMouseMove(e) {
    console.log(e.nativeEvent.offsetX, e.screenX);
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  
  render() {
    const { x, y } = this.state;
    const top = y + 'px';
    const left = x + 'px';
    return (
      <div className="container">
      <div>
        <div className="square1" onMouseMove={this._onMouseMove}>
          <div className="cat" style={{top: top, left: left,position:'absolute'}}><img src={cat} width='80' height="80" alt="kitty" /></div>
        </div>

      </div>
      <h1>Mouse coordinates: { x } { y }</h1>
    </div>
    );
  }
}

export default App;