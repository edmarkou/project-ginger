import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SignInForm.css';

const regex = /[^0-9 ]+/g;

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      input: '',
      buttonDisabled: true,
      buttonHovered: false,
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
      if (input.length === 10) {
        this.setState({input: input, buttonDisabled: false});
        document.getElementById("dotGo1").beginElementAt(0.2);
        document.getElementById("dotGo2").beginElementAt(0.1);
        document.getElementById("dotGo3").beginElementAt(0);
        document.getElementById("enabledArrow").beginElementAt(0.2);
      } else {
        if(!this.state.buttonDisabled){
          document.getElementById("dotBack1").beginElementAt(0);
          document.getElementById("dotBack2").beginElementAt(0.1);
          document.getElementById("dotBack3").beginElementAt(0.2);
          document.getElementById("backArrow").beginElementAt(0);
        }
        this.setState({input: input, buttonDisabled: true});
      }
    }
  }
  onClickSelector(event){
    event.preventDefault();
  }
  onClickButton(event){
    event.preventDefault();
    document.getElementById("goArrow").beginElementAt(0);
    this.setState({ clicked: true });
  }
  onHoveredButton(event) {
    if(!this.state.buttonHovered && !this.state.buttonDisabled) {
      document.getElementById("hoveredArrow").beginElementAt(0);
    }
    this.setState({buttonHovered: true});
  }
  onLeaveButton(event) {
    if(this.state.buttonHovered && !this.state.buttonDisabled) {
      document.getElementById("leaveArrow").beginElementAt(0.3);
    }
    this.setState({buttonHovered: false})
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
            {!this.state.clicked ? <button
              className="SignInForm__button"
              disabled={this.state.buttonDisabled}
              onClick={(event) => this.onClickButton(event)}
              onMouseOver={(event) => this.onHoveredButton(event)}
              onMouseLeave={(event) => this.onLeaveButton(event)}
            >
              <svg  xmlns="http://www.w3.org/2000/svg" width="150" height="22" viewBox="0 0 35 22">
                <g fill="#fff" fillRule="evenodd">
                  <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="2">
                    <path d="M-90 11h28.5M-71.5 1.5L-61 11l-9.5 9.5">
                      <animate attributeType="CSS" attributeName="d" id={"enabledArrow"}
                               values="M-90 11h28.5M-71.5 1.5L-61 11l-9.5 9.5;
                               M50 11h28.5M69.5 1.5L79 11l-9.5 9.5;
                               M-15 11h28.5M4.5 1.5L14 11l-9.5 9.5;
                               M10 11h28.5M29.5 1.5L39 11l-9.5 9.5;
                               M-5 11h28.5M14.5 1.5L24 11l-9.5 9.5;
                               M0 11h28.5M19.5 1.5L29 11l-9.5 9.5"
                               keyTimes="0; 0.2; 0.5; 0.75; 0.85; 1"
                               dur="0.6s" repeatCount="1" begin="indefinite"
                               fill="freeze"
                      />
                      <animate attributeType="CSS" attributeName="d" id={"hoveredArrow"}
                               from="M0 11h28.5M19.5 1.5L29 11l-9.5 9.5" to="M10 11h28.5M29.5 1.5L39 11l-9.5 9.5"
                               dur="0.2s" repeatCount="1" begin="indefinite"
                               fill="freeze"
                      />
                      <animate attributeType="CSS" attributeName="d" id={"goArrow"}
                               from="M0 11h28.5M19.5 1.5L29 11l-9.5 9.5" to="M100 11h28.5M129.5 1.5L139 11l-9.5 9.5"
                               dur="0.2s" repeatCount="1" begin="indefinite"
                               fill="freeze"
                      />
                      <animate attributeType="CSS" attributeName="d" id={"leaveArrow"}
                               values="M10 11h28.5M29.5 1.5L39 11l-9.5 9.5;
                               M-5 11h28.5M14.5 1.5L24 11l-9.5 9.5;
                               M5 11h28.5M24.5 1.5L34 11l-9.5 9.5;
                               M0 11h28.5M19.5 1.5L29 11l-9.5 9.5"
                               dur="0.4s" repeatCount="1" begin="indefinite"
                               fill="freeze"
                      />
                      <animate attributeType="CSS" attributeName="d" id={"backArrow"}
                               from="M0 11h28.5M19.5 1.5L29 11l-9.5 9.5" to="M-90 11h28.5M-71.5 1.5L-61 11l-9.5 9.5"
                               dur="0.2s" repeatCount="1" begin="indefinite"
                               fill="freeze"
                      />
                    </path>
                  </g>
                  <circle cx="2.5" cy="11" r="2.5">
                    <animate
                            attributeType="CSS" attributeName="cx" id={"dotGo1"}
                            values="2.5; 17.5; 130" keyTimes="0; 0.3; 1"
                            dur="0.4s" repeatCount="1" begin="indefinite"
                            fill="freeze"/>
                    <animate
                            attributeType="CSS" attributeName="cx" id={"dotBack1"}
                            values="130; 2.5" keyTimes="0; 1"
                            dur="0.1s"
                            repeatCount="1" begin="indefinite"
                            fill="freeze" />
                  </circle>
                  <circle cx="17.5" cy="11" r="2.5">
                    <animate attributeType="CSS" attributeName="cx" id={"dotGo2"}
                             values="17.5; 50; 130" keyTimes="0; 0.5; 1"
                             dur="0.4s" repeatCount="1" begin="indefinite"
                             fill="freeze"/>
                    <animate attributeType="CSS" attributeName="cx" id={"dotBack2"}
                             from="130" to="17.5"
                             dur="0.2s" repeatCount="1" begin="indefinite"
                             fill="freeze"/>
                  </circle>
                  <circle cx="32.5" cy="11" r="2.5">
                    <animate attributeType="CSS" attributeName="cx" id={"dotGo3"}
                             values="32.5; 75; 130" keyTimes="0; 0.6; 1"
                             dur="0.4s" repeatCount="1" begin="indefinite"
                             fill="freeze" />
                    <animate attributeType="CSS" attributeName="cx" id={"dotBack3"}
                             values="130; 32.5" keyTimes="0; 1"
                             dur="0.3s" repeatCount="1" begin="indefinite"
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