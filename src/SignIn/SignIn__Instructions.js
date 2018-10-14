import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import './SignIn__Instructions.css';

class SignIn__Instructions extends Component {
  render() {
    return (
      <CSSTransition classNames={"Instructions"} timeout={300} in={this.props.loaded} unmountOnExit>
        <div className={"div-instructions"}>
          <svg xmlns="http://www.w3.org/2000/svg" width='400px' height='120px'>
            <text textAnchor='middle' x='200' y='74' className={"Instructions"} id={"instructions"}>
              Enter phone number to login or register
              <animate
                attributeType="SVG" attributeName="y"
                values={'74; 40; -20'} keyTimes={'0; 0.5; 1'}
                dur="0.4s" repeatCount="1" begin="textDisappearOnClick.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity" id={"textDisappearOnClick"}
                from={'0.5'} to={'0'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
            </text>
            <text textAnchor='middle' x='200' y='140' className={"NewInstructions"}>
              Введите код подтверждения,
              <animate
                attributeType="SVG" attributeName="y"
                from={'140'} to={'74'}
                dur="0.2s" repeatCount="1" begin="textDisappearOnClick.begin"
                fill="freeze"/>
            </text>
            <text textAnchor='middle' x='200' y='160' className={"NewInstructions"}>
              который мы отправили на +371 {this.props.input}
              <animate
                attributeType="SVG" attributeName="y"
                from={'160'} to={'94'}
                dur="0.2s" repeatCount="1" begin="textDisappearOnClick.begin"
                fill="freeze"/>
            </text>
          </svg>
        </div>
      </CSSTransition>
    )
  }
}

SignIn__Instructions.propTypes = {
  input: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired
};

export default SignIn__Instructions;