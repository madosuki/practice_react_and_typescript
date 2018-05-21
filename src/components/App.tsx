import * as React from 'react';
import '../App.css';
import Hello from '../containers/Hello';

// const logo = require('./logo.svg');
// <img src={bgimg} alt="" className=""/>
// const bgimg = require('./bg.png');
const Welcome = require('../top.jpg');
const test = <Hello />;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <h1 className="App-title">Welcome to Sea World.</h1>
        </header>
        <div id="coloumn">
          <div>
          <p className="topmsg">
          海はとっても素敵なところだよ。みんなもおいでよ。
          </p>
          </div>
          <div id="leftbar">
            <ul>
              <li>当サイトについて</li>
              <li>海洋生物について</li>
              <li>{test}</li>
            </ul>
          </div>
          <div id="centre">
            <ul className="article">
              <li>
                <p>優雅に泳ぐウミガメの姿です。</p>
                <img src={Welcome} alt="" className="" />
                </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
