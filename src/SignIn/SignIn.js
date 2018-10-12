import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import InputMask from 'react-text-mask';
import smiley from './SignInAssets/smiley.png';
/*import clock from './clock.png';
import error from './error.svg';
import invalid from './invalid.png';
import surprised from './surprised.png';*/
import './SignInForm.css';
import SignIn__Instructions from "./SignIn__Instructions";
import SignIn__Validation from "./SignIn__Validation";

class SignIn extends Component {
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
  componentDidMount() {
    this.setState({ loaded: true })
  }
  onType(event) {
    if (event.target.value.length === 10) {
      if (this.state.input.length < 10) {
        document.getElementById("dotGo1").beginElementAt(0.2);
        document.getElementById("dotGo2").beginElementAt(0.1);
        document.getElementById("dotGo3").beginElementAt(0);
        document.getElementById("enabledArrow").beginElementAt(0.2);
      }
      this.setState({ input: event.target.value, buttonDisabled: false });
    }
    else {
        if (!this.state.buttonDisabled) {
          document.getElementById("dotBack1").beginElementAt(0);
          document.getElementById("dotBack2").beginElementAt(0.1);
          document.getElementById("dotBack3").beginElementAt(0.2);
          document.getElementById("backArrow").beginElementAt(0);
        }
        this.setState({ input: event.target.value, buttonDisabled: true });
    }
  }
  onClickSelector(event) {
    event.preventDefault();
  }
  onClickButton(event) {
    event.preventDefault();
    this.setState({ clicked: true });
    document.getElementById("goArrow").beginElementAt(0);
    document.getElementById("textMoveOnClick").beginElementAt(0.2);
    document.getElementById("textDisappearOnClick").beginElementAt(0.2);
    document.getElementById("signInTextDisappear").beginElementAt(0.2);
    document.getElementById("newTextAppear1").beginElementAt(0.2);
    document.getElementById("newTextAppear2").beginElementAt(0.2);
    document.getElementById("emojiMove").beginElementAt(0.2);
  }
  onHoveredButton() {
    if (!this.state.buttonHovered && !this.state.buttonDisabled) {
      document.getElementById("hoveredArrow").beginElementAt(0);
    }
    this.setState({ buttonHovered: true });
  }
  onLeaveButton() {
    if (this.state.buttonHovered && !this.state.buttonDisabled) {
      document.getElementById("leaveArrow").beginElementAt(0.3);
    }
    this.setState({ buttonHovered: false })
  }
  render() {
    return (
      <div className={"SignIn"}>
        <CSSTransition classNames={"SignInForm__SignInText"} timeout={ 300 } in={ this.state.loaded } unmountOnExit>
          <div style={{ textAlign: 'center', marginTop: '7.9%', marginBottom: '30px', display: 'block' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width='400px' height='90px'>
              <text textAnchor={'middle'} x={'200'} y={'70'} className={"SignInForm__SignInText"} >
                Sign In / Sign Up
                <animate
                  attributeType="SVG" attributeName="y" id={"signInTextMove"}
                  from={'70'} to={'-10'}
                  dur="0.3s" repeatCount="1" begin="indefinite"
                  fill="freeze"/>
                <animate
                  attributeType="CSS" attributeName="opacity" id={"signInTextDisappear"}
                  from={'1'} to={'0'}
                  dur="0.2s" repeatCount="1" begin="signInTextMove.begin"
                  fill="freeze"/>
              </text>
              <image width={'40px'} height={'40px'} xlinkHref={smiley} x={'160'} y={'120'}>
                <animate
                  attributeType="SVG" attributeName="y" id={"emojiMove"}
                  from={'120'} to={'40'}
                  dur="0.2s" repeatCount="1" begin="indefinite"
                  fill="freeze"/>
              </image>
            </svg>
          </div>
        </CSSTransition>
        {!this.state.clicked ?
          <CSSTransition classNames={"SignInForm__form"} timeout={ 0 } in={ this.state.loaded } unmountOnExit>
            <div style={ this.state.clicked ? {display: 'none'} : { width: '614px', margin: 'auto' }}>
              <form
                className={"SignInForm__form"}
                onClick={ () => { document.getElementById('input').focus() }}
              >
                <button
                  id={"selector"}
                  className={"SignInForm__selector"}
                  onClick={(event) => this.onClickSelector(event)}
                >
                  <a>+371 <i className="fa fa-angle-down"/> </a>
                </button>
                <InputMask id={'input'}
                           className={"SignInForm__input"}
                           autoFocus={true}
                           autoComplete="off"
                           value={ this.state.input }
                           mask={[/\d/,' ', /\d/,/\d/,/\d/, ' ', /\d/,/\d/,/\d/,/\d/]}
                           guide={ false }
                           onChange={(event) => { this.onType(event) }}/>
              </form>
              <button
                className={"SignInForm__button"}
                disabled={ this.state.buttonDisabled }
                onClick={(event) => this.onClickButton(event)}
                onMouseOver={() => this.onHoveredButton()}
                onMouseLeave={() => this.onLeaveButton()}
              >
                <svg className={!this.state.buttonDisabled ? "SignInForm__button-svg" : null}
                     xmlns="http://www.w3.org/2000/svg"
                     width="150" height="90" viewBox="0 0 35 90"
                >
                  <g fill="#fff" fillRule="evenodd">
                    <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="2">
                      <path d="M-90 45h28.5M-71.5 35.5L-61 45l-9.5 9.5">
                        <animate attributeType="CSS" attributeName="d" id={"enabledArrow"}
                                 values="M-90 45h28.5M-71.5 35.5L-61 45l-9.5 9.5;
                                 M50 45h28.5M69.5 35.5L79 45l-9.5 9.5;
                                 M-15 45h28.5M4.5 35.5L14 45l-9.5 9.5;
                                 M10 45h28.5M29.5 35.5L39 45l-9.5 9.5;
                                 M-5 45h28.5M14.5 35.5L24 45l-9.5 9.5;
                                 M0 45h28.5M19.5 35.5L29 45l-9.5 9.5"
                                 keyTimes="0; 0.2; 0.5; 0.75; 0.85; 1"
                                 dur="0.6s" repeatCount="1" begin="indefinite"
                                 fill="freeze"
                        />
                        <animate attributeType="CSS" attributeName="d" id={"hoveredArrow"}
                                 from="M0 45h28.5M19.5 35.5L29 45l-9.5 9.5" to="M10 45h28.5M29.5 35.5L39 45l-9.5 9.5"
                                 dur="0.2s" repeatCount="1" begin="indefinite"
                                 fill="freeze"
                        />
                        <animate attributeType="CSS" attributeName="d" id={"goArrow"}
                                 from="M0 11h28.5M19.5 1.5L29 11l-9.5 9.5" to="M100 11h28.5M129.5 1.5L139 11l-9.5 9.5"
                                 dur="0.2s" repeatCount="1" begin="indefinite"
                                 fill="freeze"
                        />
                        <animate attributeType="CSS" attributeName="d" id={"leaveArrow"}
                                 values="M10 45h28.5M29.5 35.5L39 45l-9.5 9.5;
                                 M-5 45h28.5M14.5 35.5L24 45l-9.5 9.5;
                                 M5 45h28.5M24.5 35.5L34 45l-9.5 9.5;
                                 M0 45h28.5M19.5 35.5L29 45l-9.5 9.5"
                                 dur="0.4s" repeatCount="1" begin="indefinite"
                                 fill="freeze"
                        />
                        <animate attributeType="CSS" attributeName="d" id={"backArrow"}
                                 from="M0 45h28.5M19.5 35.5L29 45l-9.5 9.5" to="M-90 45h28.5M-71.5 35.5L-61 45l-9.5 9.5"
                                 dur="0.2s" repeatCount="1" begin="indefinite"
                                 fill="freeze"
                        />
                      </path>
                    </g>
                    <circle cx="2.5" cy="45" r="2.5">
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
                    <circle cx="17.5" cy="45" r="2.5">
                      <animate
                               attributeType="CSS" attributeName="cx" id={"dotGo2"}
                               values="17.5; 50; 130" keyTimes="0; 0.5; 1"
                               dur="0.3s" repeatCount="1" begin="indefinite"
                               fill="freeze"/>
                      <animate
                               attributeType="CSS" attributeName="cx" id={"dotBack2"}
                               from="130" to="17.5"
                               dur="0.1s" repeatCount="1" begin="indefinite"
                               fill="freeze"/>
                    </circle>
                    <circle cx="32.5" cy="45" r="2.5">
                      <animate
                               attributeType="CSS" attributeName="cx" id={"dotGo3"}
                               values="32.5; 75; 130" keyTimes="0; 0.8; 1"
                               dur="0.2s" repeatCount="1" begin="indefinite"
                               fill="freeze" />
                      <animate
                               attributeType="CSS" attributeName="cx" id={"dotBack3"}
                               values="130; 32.5" keyTimes="0; 1"
                               dur="0.3s" repeatCount="1" begin="indefinite"
                               fill="freeze"/>
                    </circle>
                  </g>
                </svg>
              </button>
            </div>
          </CSSTransition> :
        <SignIn__Validation input={this.state.input}/>}
        <SignIn__Instructions input={this.state.input} loaded={this.state.loaded}/>
      </div>
    );
  }
}

export default SignIn;