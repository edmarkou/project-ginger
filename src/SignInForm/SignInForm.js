import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SignInForm.css';
import dots from './dots.png';

const regex = /[\D]/g;

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      input: '',
      button: true,
    }
  }

  componentDidMount(){
    this.setState({loaded: true})
  }
  onType(event){
    if (!event.target.value.match(regex)){
      if (event.target.value.length === 8) this.setState({input: event.target.value, button: false});
      else this.setState({input: event.target.value, button: true});
    }
  }
  render() {
    return (
      <div>
        <CSSTransition
          classNames={"SignInForm"}
          timeout={0}
          in={this.state.loaded}
          unmountOnExit>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', marginTop: '40px'}}>
            <form
              className="SignInForm"
            >
              <button className="SignInForm__selector">
                <a>+371 <i className="fa fa-angle-down"/></a>
              </button>
              <input
                className="SignInForm__input"
                autoFocus={true} type="text"
                value={this.state.input}
                maxLength={8}
                onChange={(event) => { this.onType(event) }}/>
            </form>
            <button
              className="SignInForm__button"
              disabled={this.state.button} >
              <img src={dots} alt={'...'}/>
            </button>
          </div>
        </CSSTransition>
      </div>

    );
  }
}

export default SignInForm;