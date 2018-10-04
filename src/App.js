import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import SignInForm from "./SignInForm/SignInForm";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
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
          <div className="App__policy-div">
            <a className="App__policy">
              <svg className="App__lock" xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12">
                <g fill="none" fillRule="evenodd">
                  <path d="M.5 5.5h10v6H.5zM8.5 3.5c0-1.933-1.067-3-3-3s-3 1.067-3 3v2h6v-2z"/>
                </g>
              </svg>
               PRIVACY POLICY
            </a>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
