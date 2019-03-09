import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { doLoginApi } from '../../api/api';

class App extends Component {
  componentWillMount () {
    doLoginApi({userName: 'admin', password: '123456'}).then(res => {
      console.log(res)
    })
  }
  render () {
    console.log('render')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
      </div>
    );
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
}

export default App;
