import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
//import { updateBreeds } from './actions/index'


class App extends Component {
  render(){
    return (
      <div>
        hello
      </div>
    );

  }
  
}

export default connect(null, )(App)