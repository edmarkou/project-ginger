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
    this.setState({loaded: true})
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
      /*event.target.value.split('').forEach( (char, index) => {
        if(char !== ' ' && (index === 1 || index === 5)) input = input + ' ' + char;
        else if(char === ' ' && (index === 1 || index === 5)) input += char;
        else if(char === ' ' && (index !== 1 || index !== 5)) {}
        else if(char !== ' ' && (index !== 1 || index !== 5)) input += char;
        console.log(input);
      });
      if (this.state.input > event.target.value){
        if (input.length === 2) input = input.slice(0,1);
        if (input.length === 6) input = input.slice(0,5);
      }*/
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
      this.refs.dotGo.beginElementAt(0);
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
          <div style={!this.state.clicked ? { display: 'grid', gridTemplateColumns: 'auto auto', marginTop: '40px'} : {marginTop: '40px'}}>
            <form
              className={ this.state.clicked ? "SignInForm-validation" : "SignInForm"}
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
              <img src={dots} alt={""}/>
            </button> : null}
          </div>
        </CSSTransition>
      </div>

    );
  }
}

export default SignInForm;