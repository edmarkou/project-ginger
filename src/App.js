import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import SignInForm from "./SignInForm/SignInForm";
import lock from './SignInForm/lock.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false
    }
  }
  componentDidMount(){
    this.setState({ loaded: true })
  }
  render() {
    return (
      <div>
        <SignInForm/>
        <CSSTransition classNames={"App__policy"} timeout={300} in={this.state.loaded} unmountOnExit>
          <div className="App-policy-div">
            <a className="App__policy">
              <img className="App__lock" src={lock}/>
               PRIVACY POLICY
            </a>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
