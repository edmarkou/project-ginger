import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import smiley from './SignInAssets/smiley.png';
import clock from './SignInAssets/clock.png';
import error from './SignInAssets/error.png';
import invalid from './SignInAssets/invalid.png';
import firstRefresh from './SignInAssets/firstRefresh.png';
import PropTypes from 'prop-types';
import './SignIn__Title.css';

class SignIn__Title extends Component {
  render() {
    return (
      <CSSTransition classNames={"SignInForm__SignInText"} timeout={300} in={this.props.loaded} unmountOnExit>
        <div style={{textAlign: 'center', marginTop: '9.9%', marginBottom: '30px', display: 'block'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width='400px' height='90px'>
            <text textAnchor={'middle'} x={'200'} y={'70'} className={"SignInForm__SignInText"}>
              Sign In / Sign Up
              <animate
                attributeType="SVG" attributeName="y"
                from={'70'} to={'-10'}
                dur="0.3s" repeatCount="1" begin="signInTextDisappear.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity" id={"signInTextDisappear"}
                from={'1'} to={'0'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="SVG" attributeName="y"
                from={'120'} to={'70'}
                dur="0.3s" repeatCount="1" begin="signInTextAppear.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity" id={"signInTextAppear"}
                from={'0'} to={'1'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
            </text>
            <image width={'40px'} height={'40px'} xlinkHref={smiley} x={'160'} y={'120'}>
              <animate
                attributeType="SVG" attributeName="y"
                from={'120'} to={'40'}
                dur="0.2s" repeatCount="1" begin="signInTextDisappear.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'0'} to={'1'}
                dur="0.2s" repeatCount="1" begin="signInTextDisappear.begin"
                fill="freeze"/>
              <animate
                attributeType="SVG" attributeName="y" id={"smileyAnimationDisappear"}
                from={'40'} to={'-60'}
                dur="0.3s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'1'} to={'0'}
                dur="0.2s" repeatCount="1" begin="smileyAnimationDisappear.begin"
                fill="freeze"/>
            </image>
            <image width={'40px'} height={'40px'} xlinkHref={clock} x={'160'} y={'120'}>
              <animate
                attributeType="SVG" attributeName="y" id={"clockAnimationUp"}
                from={'120'} to={'40'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="SVG" attributeName="y"
                from={'40'} to={'-60'}
                dur="0.3s" repeatCount="1" begin="clockAnimationUp.begin + 3.7s"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'1'} to={'0'}
                dur="0.2s" repeatCount="1" begin="clockAnimationUp.begin + 3.7s"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'0'} to={'1'}
                dur="0.2s" repeatCount="1" begin="clockAnimationUp.begin"
                fill="freeze"/>
            </image>
            <image width={'40px'} height={'40px'} xlinkHref={firstRefresh} x={'160'} y={'120'}>
              <animate
                attributeType="SVG" attributeName="y" id={"firstRefresh"}
                from={'120'} to={'40'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="SVG" attributeName="y" id={"firstRefreshDisappear"}
                from={'40'} to={'-60'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'1'} to={'0'}
                dur="0.2s" repeatCount="1" begin="firstRefreshDisappear.begin"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'0'} to={'1'}
                dur="0.2s" repeatCount="1" begin="firstRefresh.begin"
                fill="freeze"/>
            </image>
            <image width={'40px'} height={'40px'} xlinkHref={invalid} x={'160'} y={'120'}>
              <animate
                attributeType="SVG" attributeName="y" id={"secondRefresh"}
                from={'120'} to={'40'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'0'} to={'1'}
                dur="0.2s" repeatCount="1" begin="secondRefresh.begin"
                fill="freeze"/>
              <animate
                attributeType="SVG" attributeName="y" id={"secondRefreshDisappear"}
                from={'40'} to={'-60'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'1'} to={'0'}
                dur="0.2s" repeatCount="1" begin="secondRefreshDisappear.begin"
                fill="freeze"/>
            </image>
            <image width={'40px'} height={'40px'} xlinkHref={error} x={'160'} y={'120'}>
              <animate
                attributeType="SVG" attributeName="y" id={"error"}
                from={'120'} to={'40'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'0'} to={'1'}
                dur="0.2s" repeatCount="1" begin="error.begin"
                fill="freeze"/>
              <animate
                attributeType="SVG" attributeName="y" id={"errorAnimationDisappear"}
                from={'40'} to={'-60'}
                dur="0.2s" repeatCount="1" begin="indefinite"
                fill="freeze"/>
              <animate
                attributeType="CSS" attributeName="opacity"
                from={'1'} to={'0'}
                dur="0.2s" repeatCount="1" begin="errorAnimationDisappear.begin"
                fill="freeze"/>
            </image>
          </svg>
        </div>
      </CSSTransition>
    )
  };
}
SignIn__Title.propTypes = {
  loaded: PropTypes.bool.isRequired
};

export default SignIn__Title;