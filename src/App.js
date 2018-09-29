import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import SignInForm from "./SignInForm/SignInForm";
import lock from './SignInForm/lock.png';
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
        <CSSTransition classNames={"App__SignInText"} timeout={300} in={this.state.loaded} unmountOnExit>
          <div className="App">
              <a className="App__SignInText" >Sign In / Sign Up</a>
          </div>
        </CSSTransition>
        <SignInForm/>
        <CSSTransition classNames={"App__instructions"} timeout={300} in={this.state.loaded} unmountOnExit>
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <a className="App__instructions" >Enter phone number to login or register</a>
          </div>
        </CSSTransition>
        <CSSTransition classNames={"App__policy"} timeout={300} in={this.state.loaded} unmountOnExit>
          <div style={{textAlign: 'center', marginTop: '250px'}}>
            <a className="App__policy"> <img src={lock} alt={''}/> PRIVACY POLICY</a>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
