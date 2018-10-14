import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import InputMask from 'react-text-mask';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { typeNumber, clickNext } from "../actions";
import './SignIn__Form.css';

class SignIn__Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: true,
      buttonHovered: false,
    }
  }
  onType(event) {
    if (event.target.value.length === 10) {
      if (this.props.input.length < 10) {
        document.getElementById("dotGo").beginElementAt(0);
        document.getElementById("enabledArrow").beginElementAt(0.2);
      }
      this.setState({ buttonDisabled: false });
      this.props.typeNumber(event.target.value);
    }
    else {
      if (!this.state.buttonDisabled) {
        document.getElementById("dotBack").beginElementAt(0);
        document.getElementById("backArrow").beginElementAt(0);
      }
      this.setState({ buttonDisabled: true });
      this.props.typeNumber(event.target.value);
    }
  }
  onClickSelector(event) {
    event.preventDefault();
  }
  onClickButton(event) {
    event.preventDefault();
    this.props.clickNext();
    document.getElementById("goArrow").beginElementAt(0);
    // instructions animation
    document.getElementById("textDisappearOnClick").beginElementAt(0.2);
    // sign in text animation
    document.getElementById("signInTextDisappear").beginElementAt(0.2);
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
      <CSSTransition classNames={"Form"} timeout={ 0 } in={ this.props.loaded } unmountOnExit>
        <div style={ this.props.clickedNext ? {display: 'none'} : { width: '614px', margin: 'auto' }}>
          <form
            className={"Form"}
            onClick={ () => { document.getElementById('input').focus() }}
          >
            <button
              id={"selector"}
              className={"Form__selector"}
              onClick={(event) => this.onClickSelector(event)}
            >
              <a>+371 <i className="fa fa-angle-down"/> </a>
            </button>
            <InputMask id={'input'}
                       className={"Form__input"}
                       autoFocus={true}
                       autoComplete="off"
                       value={ this.props.input }
                       mask={[/\d/,' ', /\d/,/\d/,/\d/, ' ', /\d/,/\d/,/\d/,/\d/]}
                       guide={ false }
                       onChange={(event) => { this.onType(event) }}/>
          </form>
          <button
            className={"Form__button"}
            disabled={ this.state.buttonDisabled }
            onClick={(event) => this.onClickButton(event)}
            onMouseOver={() => this.onHoveredButton()}
            onMouseLeave={() => this.onLeaveButton()}
          >
            <svg className={!this.state.buttonDisabled ? "Form__button-svg" : null}
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
                    attributeType="CSS" attributeName="cx"
                    values="2.5; 17.5; 130" keyTimes="0; 0.3; 1"
                    dur="0.4s" repeatCount="1" begin="dotGo.begin + 0.2s"
                    fill="freeze"/>
                  <animate
                    attributeType="CSS" attributeName="cx" id={"dotBack"}
                    values="130; 2.5" keyTimes="0; 1"
                    dur="0.1s"
                    repeatCount="1" begin="indefinite"
                    fill="freeze" />
                </circle>
                <circle cx="17.5" cy="45" r="2.5">
                  <animate
                    attributeType="CSS" attributeName="cx"
                    values="17.5; 50; 130" keyTimes="0; 0.5; 1"
                    dur="0.3s" repeatCount="1" begin="dotGo.begin + 0.1s"
                    fill="freeze"/>
                  <animate
                    attributeType="CSS" attributeName="cx"
                    from="130" to="17.5"
                    dur="0.1s" repeatCount="1" begin="dotBack.begin + 0.1s"
                    fill="freeze"/>
                </circle>
                <circle cx="32.5" cy="45" r="2.5">
                  <animate
                    attributeType="CSS" attributeName="cx" id={"dotGo"}
                    values="32.5; 75; 130" keyTimes="0; 0.8; 1"
                    dur="0.2s" repeatCount="1" begin="indefinite"
                    fill="freeze" />
                  <animate
                    attributeType="CSS" attributeName="cx"
                    values="130; 32.5" keyTimes="0; 1"
                    dur="0.3s" repeatCount="1" begin="dotBack.begin + 0.2s"
                    fill="freeze"/>
                </circle>
              </g>
            </svg>
          </button>
        </div>
      </CSSTransition>
    )
  };
}

SignIn__Form.propTypes = {
  typeNumber: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  clickedNext: state.clickedNext,
  input: state.input,
});

export default connect(mapStateToProps, { typeNumber, clickNext })(SignIn__Form);