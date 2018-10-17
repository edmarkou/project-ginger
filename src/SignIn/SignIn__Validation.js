import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-text-mask';
import { connect } from 'react-redux';
import './SignIn__Validation.css';
import {clickedBack, refreshClicked} from "../actions";

class SignIn__Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      code5: '',
      code6: '',
      refreshButtonColor: '#CCCCCC',
      refreshClicked: false,
      error: false,
      notLoaded: true,
      errorInstructionsIsUp: false,
      refreshInstructionsIsUp: false
    }
  }

  componentDidMount() {
    document.getElementById("inputLoaded").beginElementAt(0);
    setTimeout(() => {
      this.setState({ notLoaded: false});
      document.getElementById("code1").focus();
    }, 800)
  }

  onCodeInputType(event){
    this.setState({ [event.target.id]: event.target.value });
    let code = this.state.code1 + this.state.code2 + this.state.code3 + this.state.code4 + this.state.code5 + this.state.code6;
    if (code.length === 5 && event.target.value.length === 1) {
      if(this.props.clickRefreshCount === 0) document.getElementById("smileyAnimationDisappear").beginElementAt(0);
      if(this.props.clickRefreshCount === 1) document.getElementById("firstRefreshDisappear").beginElementAt(0);
      if(this.props.clickRefreshCount === 2) document.getElementById("secondRefreshDisappear").beginElementAt(0);
      document.getElementById("error").beginElementAt(0);
      if (!this.state.errorInstructionsIsUp) document.getElementById("errorInstructionsUp").beginElementAt(0);
      if (this.state.refreshInstructionsIsUp) document.getElementById("refreshInstructionsDisappear").beginElementAt(0);
      this.setState({ errorInstructionsIsUp: true, refreshInstructionsIsUp: false, error: true, refreshButtonColor: '#F55E33'});
      document.getElementById(event.target.id).blur();
    }
  }
  onRefreshHover() {
    if (!this.state.refreshClicked) {
      this.setState({refreshButtonColor: '#00F1FF'});
      document.getElementById("rotateFront").beginElementAt(0);
    }
  }
  onRefreshLeave() {
    if (!this.state.refreshClicked) {
      if(!this.state.error)
        this.setState({ refreshButtonColor: '#CCCCCC' });
      else
        this.setState({ refreshButtonColor: '#F55E33'});
      document.getElementById("rotateBack").beginElementAt(0);
    }
  }
  clickedRefresh() {
    if(!this.state.refreshClicked) {
      document.getElementById("rotate360").beginElementAt(0);
      document.getElementById("buttonDisappear").beginElementAt(0);
      document.getElementById("inputDisappear").beginElementAt(0);
      switch (this.props.clickRefreshCount){
        case 0:
          if (this.state.error) document.getElementById("errorAnimationDisappear").beginElementAt(0);
          else document.getElementById("smileyAnimationDisappear").beginElementAt(0);
          document.getElementById("clockAnimationUp").beginElementAt(0);
          document.getElementById("firstRefresh").beginElementAt(3.9);
          break;
        case 1:
          if (this.state.error) document.getElementById("errorAnimationDisappear").beginElementAt(0);
          else document.getElementById("firstRefreshDisappear").beginElementAt(0);
          document.getElementById("clockAnimationUp").beginElementAt(0);
          document.getElementById("secondRefresh").beginElementAt(3.9);
          document.getElementById("changeNumberTextAppear").beginElementAt(5);
          document.getElementById("changeNumberTextDisappear").beginElementAt(7);
          break;
        case 2:
          if (this.state.error) document.getElementById("errorAnimationDisappear").beginElementAt(0);
          else document.getElementById("secondRefreshDisappear").beginElementAt(0);
          document.getElementById("clockAnimationUp").beginElementAt(0);
          document.getElementById("error").beginElementAt(3.9);
          document.getElementById("changeNumberTextAppear").beginElementAt(5);
          document.getElementById("changeNumberTextDisappear").beginElementAt(7);
          break;
        default:
          document.getElementById("errorAnimationDisappear").beginElementAt(0);
          document.getElementById("clockAnimationUp").beginElementAt(0);
          document.getElementById("error").beginElementAt(3.9);
          document.getElementById("changeNumberTextAppear").beginElementAt(5);
          document.getElementById("changeNumberTextDisappear").beginElementAt(7);
          break;
      }
      if (this.state.errorInstructionsIsUp) document.getElementById("errorInstructionsDisappear").beginElementAt(0);
      if (!this.state.refreshInstructionsIsUp) document.getElementById("refreshInstructionsUp").beginElementAt(0);
      this.props.refreshClicked(this.props.clickRefreshCount);
      setTimeout(() => {
        this.setState({ refreshClicked: false, refreshButtonColor: '#CCCCCC'});
        document.getElementById("code1").focus();
      }, 4000)
    }
    this.setState({
      refreshInstructionsIsUp: true,
      errorInstructionsIsUp: false,
      refreshClicked: true,
      error: false,
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      code5: '',
      code6: '',
    });
  }
  changeNumber() {
    document.getElementById("signInTextAppear").beginElementAt(0);
    document.getElementById("textAppear").beginElementAt(0);
    document.getElementById("newInstructionsDisappear").beginElementAt(0);
    if (this.state.error) {
      document.getElementById("errorAnimationDisappear").beginElementAt(0);
      document.getElementById("errorInstructionsDisappear").beginElementAt(0);
    }
    else {
      switch (this.props.clickRefreshCount) {
        case 0:
          document.getElementById("smileyAnimationDisappear").beginElementAt(0);
          break;
        case 1:
          document.getElementById("firstRefreshDisappear").beginElementAt(0);
          document.getElementById("refreshInstructionsDisappear").beginElementAt(0);
          break;
        case 2:
          document.getElementById("secondRefreshDisappear").beginElementAt(0);
          document.getElementById("refreshInstructionsDisappear").beginElementAt(0);
          break;
        default:
          document.getElementById("errorAnimationDisappear").beginElementAt(0);
          document.getElementById("refreshInstructionsDisappear").beginElementAt(0);
          break;
      }
    }
    this.props.clickedBack();
  }
  render() {
    return (
      <div className="Validation-div-enabled">
        <form className={this.state.error ? "Validation Validation-error" : (this.state.notLoaded ? "Validation Validation-loaded" : "Validation")}>
          <svg xmlns="http://www.w3.org/2000/svg" width={'700px'} height={'150px'}>
            <g>
              <foreignObject x='0px' y='0' height={'150px'} width={'230px'}>
                <button className={"ChangeNumber"} disabled={this.state.refreshClicked}
                        onMouseEnter={() => { document.getElementById("changeNumberTextAppear").beginElementAt(0) }}
                        onMouseLeave={() => { document.getElementById("changeNumberTextDisappear").beginElementAt(0) }}
                        onClick={ () => { this.changeNumber()}}
                >
                  <a id={"selectorNumber"} className={"SelectorNumber"}>+371</a>
                  <a className={"Number"}>{this.props.input}:</a>
                  <br/>
                  <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width={"102px"} height={"15px"}>
                    <g style={{opacity: '0'}}>
                      <foreignObject width={"102px"} height={"15px"}>
                        <a className={"ChangeNumber__text"}>change number</a>
                      </foreignObject>
                      <animate attributeName="opacity" id={"changeNumberTextAppear"}
                               attributeType={"CSS"}
                               from={'0'} to={'1'}
                               fill={"freeze"} begin={'indefinite'}
                               repeatCount={"1"} dur={"0.2s"}
                      />
                      <animate attributeName="opacity" id={"changeNumberTextDisappear"}
                               attributeType={"CSS"}
                               from={'1'} to={'0'}
                               fill={"freeze"} begin={'indefinite'}
                               repeatCount={"1"} dur={"0.2s"}
                      />
                    </g>
                  </svg>
                </button>
              </foreignObject>
              <animateTransform attributeName="transform" id={'buttonDisappear'}
                                attributeType="XML"
                                type="translate"
                                from="0, 0" to="30, 0" dur="0.2s"
                                fill={"freeze"} begin={'indefinite'}
                                repeatCount="1"
              />
              <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                from="30, 0" to="0, 0" dur="0.2s"
                                fill={"freeze"} begin={'buttonDisappear.begin + 3.8s'}
                                repeatCount="1"
              />
              <animate attributeName="opacity"
                       attributeType={"CSS"}
                       from={'0'} to={'1'}
                       fill={"freeze"} begin={'buttonDisappear.begin + 3.8s'}
                       repeatCount={"1"} dur={"0.2s"}
              />
              <animate attributeName="opacity"
                       attributeType={"CSS"}
                       from={'1'} to={'0'}
                       fill={"freeze"} begin={'buttonDisappear.begin'}
                       repeatCount={"1"} dur={"0.2s"}
              />
            </g>
            <g>
              <foreignObject x='700px' y='0' height={'150px'} width={'356px'}>
                <InputMask
                  className={"CodeInput"}
                  id="code1"
                  style={this.state.error ? {marginLeft: '60px', color: '#f55e33', border: 'solid 1px #f55e33'} : {marginLeft: '60px'}}
                  disabled={this.state.refreshClicked || this.state.notLoaded ? "disabled" : null}
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
                <InputMask className="CodeInput"
                           id="code2"
                           style={this.state.error ? {marginLeft: '6px', color: '#f55e33', border: 'solid 1px #f55e33'} : {marginLeft: '6px'}}
                           disabled={this.state.refreshClicked || this.state.notLoaded ? "disabled" : null}
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
                <InputMask className="CodeInput"
                           id="code3"
                           style={this.state.error ? {marginLeft: '6px', color: '#f55e33', border: 'solid 1px #f55e33'} : {marginLeft: '6px'}}
                           disabled={this.state.refreshClicked || this.state.notLoaded ? "disabled" : null}
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
                <InputMask className="CodeInput"
                           id="code4"
                           style={this.state.error ? {marginLeft: '20px', color: '#f55e33', border: 'solid 1px #f55e33'} : {marginLeft: '20px'}}
                           disabled={this.state.refreshClicked || this.state.notLoaded ? "disabled" : null}
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
                <InputMask className="CodeInput"
                           id="code5"
                           style={this.state.error ? {marginLeft: '6px', color: '#f55e33', border: 'solid 1px #f55e33'} : {marginLeft: '6px'}}
                           disabled={this.state.refreshClicked || this.state.notLoaded ? "disabled" : null}
                           autoComplete="off"
                           placeholder={8}
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
                <InputMask className="CodeInput"
                           id="code6"
                           style={this.state.error ? {marginLeft: '6px', color: '#f55e33', border: 'solid 1px #f55e33'} : {marginLeft: '6px'}}
                           disabled={this.state.refreshClicked || this.state.notLoaded ? "disabled" : null}
                           autoComplete="off"
                           placeholder={8}
                           value={this.state.code6}
                           onChange={(event) => {
                             if (event.target.value.length === 0 && this.state.code6.length !== 0)
                               document.getElementById("code5").focus();
                             this.onCodeInputType(event);
                           }}
                           mask={[/\d/]}
                           guide={false}
                />
              </foreignObject>
              <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                from="-470, 0" to="-490, 0" dur="0.2s"
                                fill={"freeze"} begin={'inputDisappear.begin'}
                                repeatCount="1"
              />
              <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                from="-440, 0" to="-470, 0" dur="0.2s"
                                fill={"freeze"} begin={'inputDisappear.begin + 3.8s'}
                                repeatCount="1"
              />
              <animate attributeName="opacity"
                       attributeType={"CSS"}
                       from={'0'} to={'1'}
                       fill={"freeze"} begin={'inputDisappear.begin + 3.8s'}
                       repeatCount={"1"} dur={"0.2s"}
              />
              <animate attributeName="opacity" id={'inputDisappear'}
                       attributeType={"CSS"}
                       from={'1'} to={'0'}
                       fill={"freeze"} begin={'indefinite'}
                       repeatCount={"1"} dur={"0.2s"}
              />
              <animate attributeName="opacity" id={'inputLoaded'}
                       attributeType={"CSS"}
                       values={'0; 0; 1'} keyTimes={'0; 0.75; 1'}
                       fill={"freeze"} begin={'indefinite'}
                       repeatCount={"1"} dur={"0.8s"}
              />
              <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                values={'-410, 0; -410, 0; -470, 0'} keyTimes={'0; 0.75; 1'} dur="0.8s"
                                fill={"freeze"} begin={'inputLoaded.begin'}
                                repeatCount="1"
              />
            </g>
            <defs>
              <linearGradient x1="5.29423494%" y1="21.9601149%" x2="82.112707%" y2="21.9601149%" id="linearGradient-1">
                <stop stopColor="#00F2FF" stopOpacity="0" offset="0%"/>
                <stop stopColor="#00F9FF" offset="100%"/>
              </linearGradient>
              <linearGradient x1="45.919084%" y1="-86.5911499%" x2="90.6716411%" y2="19.3514864%" id="linearGradient-2">
                <stop stopColor="#00F2FF" stopOpacity="0" offset="0%"/>
                <stop stopColor="#00F3FF" stopOpacity="0.172868497" offset="35.3775289%"/>
                <stop stopColor="#00F9FF" offset="100%"/>
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="#ffffff" fillRule="evenodd">
              <g transform="translate(610, 59)" fillRule="nonzero">
                <g style={{cursor: 'pointer'}}
                  onMouseEnter={() => {this.onRefreshHover()}}
                  onMouseLeave={() => {this.onRefreshLeave()}}
                  onClick={() => {this.clickedRefresh()}}>
                  <rect id="Rectangle" x="0" y="0" width="32" height="32"/>
                  <path
                    d="M6,21.9381945 L7.76629301,21 C9.48996241,24.2450681 12.8633597,26.3163636 16.6041316,26.3163636 C20.2453954,26.3163636 23.5426319,24.3544813 25.307754,21.2443762 L27.0471433,22.2315564 C24.9302322,25.9615059 20.9725418,28.3163636 16.6041316,28.3163636 C12.1161838,28.3163636 8.06739005,25.8303687 6,21.9381945 Z"
                    id="Oval"
                    fill={this.state.refreshClicked ? 'url(#linearGradient-1)' : this.state.refreshButtonColor}
                    transform="translate(16.523572, 24.658182) scale(-1, 1) translate(-16.523572, -24.658182)"/>
                  <polygon id="Path-14-Copy"
                           fill={this.state.refreshClicked ? '#00F1FF' : this.state.refreshButtonColor}
                           transform="translate(8.500000, 23.504113) rotate(-180.000000) translate(-8.500000, -23.504113)"
                           points="10 20 12 20 12 27.0082262 5 27.0082262 5 25.0082262 10 25.0082262"/>
                  <path
                    d="M5,5.0569821 L6.76629301,4.11878755 C8.48996241,7.36385566 11.8633597,9.43515117 15.6041316,9.43515117 C19.3928334,9.43515117 22.802491,7.3101203 24.5040458,4 L26.2827946,4.91435908 C24.2418293,8.88475185 20.1496589,11.4351512 15.6041316,11.4351512 C11.1161838,11.4351512 7.06739005,8.94915629 5,5.0569821 Z"
                    id="Oval-Copy-3"
                    fill={this.state.refreshClicked ? 'url(#linearGradient-2)' : this.state.refreshButtonColor}
                    transform="translate(15.641397, 7.717576) scale(1, -1) translate(-15.641397, -7.717576)"/>
                  <polygon id="Path-14" fill={this.state.refreshClicked ? '#00F1FF' : this.state.refreshButtonColor}
                           points="25 5 27 5 27 12.0082262 20 12.0082262 20 10.0082262 25 10.0082262"/>
                  <animateTransform id={"rotateFront"}
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="rotate"
                                    from="0 16 16" to="135 16 16" dur="0.1s"
                                    fill={"freeze"} begin={'indefinite'}
                                    repeatCount="1"/>
                  <animateTransform id={"rotateBack"}
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="rotate"
                                    from="135 16 16" to="0 16 16" dur="0.1s"
                                    fill={"freeze"} begin={'indefinite'}
                                    repeatCount="1"/>
                  <animateTransform id={"rotate360"}
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="rotate"
                                    from="0 16 16" to="360 16 16" dur="1s"
                                    fill={"freeze"} begin={'indefinite'}
                                    repeatCount="4"/>
                </g>
                <animateTransform id={"middleRefresh"}
                                  attributeName="transform"
                                  attributeType="XML"
                                  type="translate"
                                  from="610, 59" to="318, 59" dur="0.3s"
                                  fill={"freeze"} begin={'rotate360.begin'}
                                  repeatCount="1"
                />
                <animateTransform attributeName="transform"
                                  attributeType="XML"
                                  type="translate"
                                  from="318, 59" to="610, 59" dur="0.2s"
                                  fill={"freeze"} begin={'rotate360.end'}
                                  repeatCount="1"
                />
                <animate attributeName="opacity"
                         attributeType={"CSS"}
                         values={"0; 0; 1"} keyTimes={"0; 0.8; 1"}
                         fill={"freeze"} begin={'rotate360.end'}
                         repeatCount={"1"} dur={"1.3s"}
                />
              </g>
            </g>
          </svg>
        </form>
      </div>
    )
  }
}

SignIn__Validation.propTypes = {
  input: PropTypes.string.isRequired,
  refreshClicked: PropTypes.func.isRequired,
  clickedBack: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  clickRefreshCount: state.clickRefreshCount,
});

export default connect(mapStateToProps, { refreshClicked, clickedBack })(SignIn__Validation);