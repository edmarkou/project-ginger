import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import './SignIn__Instructions.css';

class SignIn__Instructions extends Component {
  render() {
    return (
      <CSSTransition classNames={"Instructions"} timeout={300} in={this.props.loaded} unmountOnExit>
        <div className={"div-instructions"}>
          <svg xmlns="http://www.w3.org/2000/svg" width='400px' height='170px'>
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
            <text textAnchor='middle' x='200' y='180' className={"NewInstructions"}>
              <tspan style={this.props.clickRefreshCount !== 0 ? {fill: '#8e8e8e'} : null }>Введите код подтверждения,</tspan>
              <animate
                attributeType="SVG" attributeName="y"
                from={'180'} to={'74'}
                dur="0.3s" repeatCount="1" begin="textDisappearOnClick.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                values={"0; 0; 1"} keyTimes={"0; 0.333; 1"}
                dur="0.3s" repeatCount="1" begin="textDisappearOnClick.begin"
                fill="freeze"/>
            </text>
            <text textAnchor='middle' x='200' y='200' className={"NewInstructions"}>
              <tspan style={this.props.clickRefreshCount !== 0 ? {fill: '#8e8e8e'} : null }>который мы отправили на</tspan> +371 {this.props.input}
              <animate
                attributeType="SVG" attributeName="y"
                from={'210'} to={'94'}
                dur="0.3s" repeatCount="1" begin="textDisappearOnClick.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                values={"0; 0; 1"} keyTimes={"0; 0.333; 1"}
                dur="0.3s" repeatCount="1" begin="textDisappearOnClick.begin"
                fill="freeze"/>
            </text>
            {/* error instructions -------------------------------------------------------*/}
            <text textAnchor='middle' x='200' y='180' className={"errorInstructions"}>
              Пожалуйста, перепроверьте код подтверждения,
              <animate
                attributeType="SVG" attributeName="y" id={'errorInstructionsUp'}
                from={'210'} to={'134'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'0'} to={'1'}
                dur="0.2s" repeatCount="1" begin="errorInstructionsUp.begin"
                fill="freeze"/>
              <animate
                attributeType="SVG" attributeName="y" id={"errorInstructionsDisappear"}
                values={'134; 84; -20'} keyTimes={'0; 0.5; 1'}
                dur="0.4s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'1'} to={'0'}
                dur="0.2s" repeatCount="1" begin="errorInstructionsDisappear.begin"
                fill="freeze"/>
            </text>
            <text textAnchor='middle' x='200' y='200' className={"errorInstructions"}>
              прежде чем продолжить
              <animate
                attributeType="SVG" attributeName="y"
                from={'210'} to={'154'}
                dur="0.2s" repeatCount="1" begin="errorInstructionsUp.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'0'} to={'1'}
                dur="0.2s" repeatCount="1" begin="errorInstructionsUp.begin"
                fill="freeze"/>
              <animate
                attributeType="SVG" attributeName="y"
                values={'154; 104; -20'} keyTimes={'0; 0.5; 1'}
                dur="0.4s" repeatCount="1" begin="errorInstructionsDisappear.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'1'} to={'0'}
                dur="0.2s" repeatCount="1" begin="errorInstructionsDisappear.begin"
                fill="freeze"/>
            </text>
            {/* refresh instructions ---------------------------------------------------*/}
            <text textAnchor='middle' x='200' y='180' className={"errorInstructions"}>
              Опять что-то не получилось, может
              <animate
                attributeType="SVG" attributeName="y" id={'refreshInstructionsUp'}
                from={'210'} to={'134'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'0'} to={'1'}
                dur="0.2s" repeatCount="1" begin="refreshInstructionsUp.begin"
                fill="freeze"/>
              <animate
                attributeType="SVG" attributeName="y" id={"refreshInstructionsDisappear"}
                values={'134; 104; -20'} keyTimes={'0; 0.5; 1'}
                dur="0.4s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'1'} to={'0'}
                dur="0.2s" repeatCount="1" begin="refreshInstructionsDisappear.begin"
                fill="freeze"/>
            </text>
            <text textAnchor='middle' x='200' y='200' className={"errorInstructions"}>
              номер телефона неверный?
              <animate
                attributeType="SVG" attributeName="y"
                from={'210'} to={'154'}
                dur="0.2s" repeatCount="1" begin="refreshInstructionsUp.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'0'} to={'1'}
                dur="0.2s" repeatCount="1" begin="refreshInstructionsUp.begin"
                fill="freeze"/>
              <animate
                attributeType="SVG" attributeName="y"
                values={'154; 104; -20'} keyTimes={'0; 0.5; 1'}
                dur="0.4s" repeatCount="1" begin="refreshInstructionsDisappear.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'1'} to={'0'}
                dur="0.2s" repeatCount="1" begin="refreshInstructionsDisappear.begin"
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
  loaded: PropTypes.bool.isRequired,
  clickRefreshCount: PropTypes.number.isRequired
};

export default SignIn__Instructions;