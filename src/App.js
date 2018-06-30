import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <p className="test-less">在项目中暴露 (eject) Webpack 文件，并在项目中配置 less 的使用。</p>
        </p>
      </div>
    );
  }
}

export default App;
