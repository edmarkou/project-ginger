import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import InputMask from 'react-text-mask';
import smiley from './smiley.png';
import './SignInForm.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      input: '',
      buttonDisabled: true,
      buttonHovered: false,
      clicked: false,
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      code5: '',
      code6: ''
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
    document.getElementById("goArrow").beginElementAt(0);
    document.getElementById("textMoveOnClick").beginElementAt(0.2);
    document.getElementById("signInTextMove").beginElementAt(0.2);
    document.getElementById("textDisappearOnClick").beginElementAt(0.2);
    document.getElementById("signInTextDisappear").beginElementAt(0.2);
    document.getElementById("newTextAppear1").beginElementAt(0.2);
    document.getElementById("newTextAppear2").beginElementAt(0.2);
    document.getElementById("emojiMove").beginElementAt(0.2);
    this.setState({ clicked: true });
  }
  onHoveredButton(event) {
    if (!this.state.buttonHovered && !this.state.buttonDisabled) {
      document.getElementById("hoveredArrow").beginElementAt(0);
    }
    this.setState({ buttonHovered: true });
  }
  onLeaveButton(event) {
    if (this.state.buttonHovered && !this.state.buttonDisabled) {
      document.getElementById("leaveArrow").beginElementAt(0.3);
    }
    this.setState({ buttonHovered: false })
  }
  onCodeInputType(event){
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    return (
      <div className={"SignInForm"}>
        <CSSTransition classNames={"SignInForm__SignInText"} timeout={ 300 } in={ this.state.loaded } unmountOnExit>
          <div style={{ textAlign: 'center', marginTop: '110px', marginBottom: '30px', display: 'block' }}>
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
                  dur="0.2s" repeatCount="1" begin="indefinite"
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
                onMouseOver={(event) => this.onHoveredButton(event)}
                onMouseLeave={(event) => this.onLeaveButton(event)}
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
        <div className="SignInForm__validation-div-enabled">
            <form
              className="SignInForm__validation"
            >
              <button className={"SignInForm__changeNumber"}>
                <a id={"selectorNumber"} className={"SignInForm__selectorNumber"}>+371</a>
                <a className={"SignInForm__number"}>{this.state.input}:</a>
              </button>
              <InputMask className="SignInForm__codeInput"
                         id="code1"
                         style={{marginLeft: '60px'}}
                         autoFocus={true}
                         autoComplete="off"
                         value={this.state.code1}
                         onChange={(event) => {
                           if (event.target.value.length === 1)
                             document.getElementById("code2").focus();
                           this.onCodeInputType(event);
                         }}
                         mask={[/\d/]}
                         guide={false}
              />
              <InputMask className="SignInForm__codeInput"
                         id="code2"
                         style={{marginLeft: '6px'}}
                         autoComplete="off"
                         value={this.state.code2}
                         onChange={(event) => {
                           if (event.target.value.length === 0 && this.state.code2.length !== 0)
                             document.getElementById("code1").focus();
                           else
                             document.getElementById("code3").focus();
                           this.onCodeInputType(event);
                         }}
                         mask={[/\d/]}
                         guide={false}
              />
              <InputMask className="SignInForm__codeInput"
                         id="code3"
                         style={{marginLeft: '6px'}}
                         autoComplete="off"
                         value={this.state.code3}
                         onChange={(event) => {
                           if (event.target.value.length === 0 && this.state.code3.length !== 0)
                             document.getElementById("code2").focus();
                           else
                             document.getElementById("code4").focus();
                           this.onCodeInputType(event);
                         }}
                         mask={[/\d/]}
                         guide={false}
              />
              <InputMask className="SignInForm__codeInput"
                         id="code4"
                         style={{marginLeft: '20px'}}
                         autoComplete="off"
                         value={this.state.code4}
                         onChange={(event) => {
                           if (event.target.value.length === 0 && this.state.code4.length !== 0)
                             document.getElementById("code3").focus();
                           else
                             document.getElementById("code5").focus();
                           this.onCodeInputType(event);
                         }}
                         mask={[/\d/]}
                         guide={false}
              />
              <InputMask className="SignInForm__codeInput"
                         id="code5"
                         style={{marginLeft: '6px'}}
                         autoComplete="off"
                         value={this.state.code5}
                         onChange={(event) => {
                           if (event.target.value.length === 0 && this.state.code5.length !== 0)
                             document.getElementById("code4").focus();
                           else
                             document.getElementById("code6").focus();
                           this.onCodeInputType(event);
                         }}
                         mask={[/\d/]}
                         guide={false}
              />
              <InputMask className="SignInForm__codeInput"
                         id="code6"
                         style={{marginLeft: '6px'}}
                         autoComplete="off"
                         value={this.state.code6}
                         onChange={(event) => {
                           if (event.target.value.length === 0 && this.state.code6.length !== 0)
                             document.getElementById("code5").focus();
                           this.onCodeInputType(event);
                         }}
                         mask={[/\d/]}
                         guide={false}
              />
            </form>
        </div>}
        <CSSTransition classNames={"SignInForm__instructions"} timeout={ 300 } in={ this.state.loaded } unmountOnExit>
          <div className={"div-instructions"}>
            <svg xmlns="http://www.w3.org/2000/svg" width='400px' height='120px'>
              <text textAnchor='middle' x='200' y='74' className={"SignInForm__instructions"} id={"instructions"}>
                Enter phone number to login or register
                <animate
                  attributeType="SVG" attributeName="y" id={"textMoveOnClick"}
                  values={'74; 40; -20'} keyTimes={'0; 0.5; 1'}
                  dur="0.4s" repeatCount="1" begin="indefinite"
                  fill="freeze"/>
                <animate
                  attributeType="CSS" attributeName="opacity" id={"textDisappearOnClick"}
                  from={'0.5'} to={'0'}
                  dur="0.2s" repeatCount="1" begin="indefinite"
                  fill="freeze"/>
              </text>
              <text textAnchor='middle' x='200' y='140' className={"SignInForm__newInstructions"} id={"instructions"}>
                Введите код подтверждения,
                <animate
                  attributeType="SVG" attributeName="y" id={"newTextAppear1"}
                  from={'140'} to={'74'}
                  dur="0.2s" repeatCount="1" begin="indefinite"
                  fill="freeze"/>
              </text>
              <text textAnchor='middle' x='200' y='160' className={"SignInForm__newInstructions"} id={"instructions"}>
                который мы отправили на +371 {this.state.input}
                <animate
                  attributeType="SVG" attributeName="y" id={"newTextAppear2"}
                  from={'160'} to={'94'}
                  dur="0.2s" repeatCount="1" begin="indefinite"
                  fill="freeze"/>
              </text>
            </svg>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default SignInForm;