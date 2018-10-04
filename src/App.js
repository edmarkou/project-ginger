import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import SignInForm from "./SignInForm/SignInForm";
import lock from './assets/lock.svg';
import lockAqua from './assets/lockAqua.svg';
import lockClicked from './assets/lockClicked.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      lock: lock
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
            <a className="App__policy"
               onMouseOver={() => this.setState({lock: lockAqua})}
               onMouseLeave={() => this.setState({lock: lock})}
            >
              <img className="App__lock" src={this.state.lock} alt={''}/>
               PRIVACY POLICY
            </a>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
