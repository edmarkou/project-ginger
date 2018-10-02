import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SignInForm.css';
import dots from './dotsGo.svg';
import rightArrow from './arrowRight.svg';

const regex = /[^0-9 ]+/g;

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      input: '',
      buttonDisabled: true,
      clicked: false,
    }
  }
  componentDidMount(){
    this.setState({ loaded: true })
  }
  onType(event){
    if (!event.target.value.match(regex)){
      let input = event.target.value;
      if (this.state.input < input){
        if (input.length === 2) input = input.slice(0,1) + ' ' + input.slice(1,2);
        if (input.length === 6) input = input.slice(0,5) + ' ' + input.slice(5,6);
      }
      if (this.state.input > input){
        if (input.length === 2) input = input.slice(0,1);
        if (input.length === 6) input = input.slice(0,5);
      }
      if (input.length === 10) this.setState({input: input, buttonDisabled: false});
      else this.setState({input: input, buttonDisabled: true});
    }
  }
  onClickSelector(event){
    event.preventDefault();
    console.log('clicked')
  }
  onClickButton(event){
    event.preventDefault();
    this.setState({ clicked: true });
  }
  dotGo(e) {
    e.preventDefault();
    if(!this.state.buttonDisabled) {
      console.log(this.refs.dotGo);
      //this.refs.dotGo.beginElementAt(0);
    }
  }
  render() {
    return (
      <div className={"SignInForm"}>
        <CSSTransition classNames={"SignInForm__SignInText"} timeout={300} in={this.state.loaded} unmountOnExit>
          <div style={{textAlign: 'center', marginTop: '10%', marginBottom: '60px'}}>
            <a className="SignInForm__SignInText" >Sign In / Sign Up</a>
          </div>
        </CSSTransition>
        <CSSTransition
          classNames={"SignInForm__form"}
          timeout={0}
          in={this.state.loaded}
          unmountOnExit>
          <div style={!this.state.clicked ? { display: 'grid', gridTemplateColumns: 'auto auto'} : null}>
            <form
              className={ this.state.clicked ? "SignInForm-validation" : "SignInForm__form"}
              onClick={() => { document.getElementById('input').focus() }}
            >
              <button
                id={'selector'}
                className="SignInForm__selector"
                onClick={(event) => this.onClickSelector(event)}
              >
                <a>+371 <i className="fa fa-angle-down"/></a>
              </button>
              <input
                type="text"
                autoComplete={'off'}
                id={'input'}
                className="SignInForm__input"
                autoFocus={true}
                value={this.state.input}
                maxLength={10}
                onChange={(event) => { this.onType(event) }}/>
            </form>
            {!this.state.clicked ? <button id={'buttonn'}
              className="SignInForm__button"
              disabled={this.state.buttonDisabled}
              onClick={(event) => this.onClickButton(event)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="130" height="5" viewBox="0 0 35 5">
                <g fill="#fff" fillRule="evenodd">
                  <circle cx="2.5" cy="2.5" r="2.5">
                    <animate attributeType="CSS" attributeName="cx"
                             from="2.5" to="130"
                             dur="0.4s" repeatCount="1" begin="indefinite 0.4s"
                             fill="freeze"/>
                    <animate
                      attributeType="CSS" attributeName="cx"
                      from="130" to="2.5"
                      dur="0.5s" repeatCount="1" begin="indefinite"
                      fill="freeze" />
                  </circle>
                  <circle cx="17.5" cy="2.5" r="2.5">
                    <animate attributeType="CSS" attributeName="cx"
                             from="17.5" to="130"
                             dur="0.4s" repeatCount="1" begin="indefinite 0.3s"
                             fill="freeze"/>
                    <animate attributeType="CSS" attributeName="cx"
                             from="130" to="17.5"
                             dur="0.4s" repeatCount="1" begin="indefinite 0.3s"
                             fill="freeze"/>
                  </circle>
                  <circle cx="32.5" cy="2.5" r="2.5">
                    <animate attributeType="CSS" attributeName="cx"
                             from="32.5" to="130"
                             dur="0.5s" repeatCount="1" begin="indefinite"
                             fill="freeze" />
                    <animate attributeType="CSS" attributeName="cx"
                             from="130" to="32.5"
                             dur="0.4s" repeatCount="1" begin="indefinite 0.4s"
                             fill="freeze"/>
                  </circle>
                </g>
              </svg>
            </button> : null}
          </div>
        </CSSTransition>
        <CSSTransition classNames={"SignInForm__instructions"} timeout={300} in={this.state.loaded} unmountOnExit>
          <div style={{textAlign: 'center', marginTop: '60px'}}>
            <a className="SignInForm__instructions" >Enter phone number to login or register</a>
          </div>
        </CSSTransition>
      </div>

    );
  }
}

export default SignInForm;