import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRandomJoke } from './actions/index'
import ConnectSocial from './components/ConnectSocial'

class App extends Component {
  state = {
    joke : '',
    punchline : '',
  }

  componentDidMount() {
    this.props.getRandomJoke()  
}


  render(){
    //if (!this.props.jokelist) return "loading....."
    console.log("from state: ", this.props.jokelist)
let getJoke = this.props.jokelist.setup         //map(joke=> joke.setup)
console.log("joke1 value: ", typeof this.props.jokelist)
  

let getPunchline = this.props.jokelist.punchline        //map(joke=> joke.punchline)
console.log("getPunchline : ", getPunchline)


    return (
      <div>
        <h1><u> Joke App</u> </h1>
        <h3> Setup : {getJoke}</h3>
        <h3> Punchline: {getPunchline}</h3>
        <br></br>
        <ConnectSocial />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state with random joke : ', state.jokelist)
  return {
    jokelist: state.jokelist
  }
}

export default connect(mapStateToProps, {getRandomJoke })(App)
