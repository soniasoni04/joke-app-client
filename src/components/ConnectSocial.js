import React, {Component} from 'react';
import { connect } from 'react-redux';
import { postJoke } from '../actions/index'

class ConnectSocial extends Component {
  state = {
    type : '',
    setup : '',
    punchline : ''
  }

//   componentDidMount() {
//    this.props.postJoke(this.state)
// }

onChange = event => {
    //console.log("message: ", event.target.value)
    this.setState({
        [event.target.name]: event.target.value
    });
};

onSubmit = event => {
    event.preventDefault();
    console.log('this.state: ', this.state)

    this.props.postJoke(this.state)

    this.setState({
        type : '',
        setup : '',
        punchline : ''
    });
};


  render(){

        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <label>Provide type of your Joke : </label><br></br>
                    <input 
                    type='text'
                    name='type'
                    placeholder='type of your joke'
                    value={this.state.type}
                    onChange={this.onChange}/> 
                    <br></br><span></span> <br></br>
                    
                    <label> Do you want to share your joke on facebook : </label><br></br>
                    <textarea
                        type='text'
                        name='setup'
                        placeholder='Type your Joke here'
                        cols="50" rows="6"
                        value={this.state.setup}
                        onChange={this.onChange} /><br /><br />

                    <label> Provide your joke-punchline : </label><br></br>
                    <textarea 
                    type='text'
                    name='punchline'
                    placeholder='type of your joke-punchline'
                    cols="50" rows="4"
                    value={this.state.punchline}
                    onChange={this.onChange}
                    />
                    <br></br><br></br>
                    <button type='submit'>Post your joke in our database</button> 
                    <span>    </span>
                    
                    <button onClick={this.postUrJoke}>Post ur joke on Social-Media</button>
                </form>
            </div>
        )
  }
}

const mapStateToProps = (state) => {
  //console.log('state with random joke : ', state.jokelist)
  return {
    message: "hello"
  }
}

export default connect(mapStateToProps,{postJoke})(ConnectSocial)
