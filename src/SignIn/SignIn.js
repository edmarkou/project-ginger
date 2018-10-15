import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn__Instructions from "./SignIn__Instructions";
import SignIn__Validation from "./SignIn__Validation";
import SignIn__Form from "./SignIn__Form";
import SignIn__Title from "./SignIn__Title";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {
    this.setState({ loaded: true });
  }
  render() {
    return (
      <div style={{verticalAlign: 'middle'}}>
        <SignIn__Title loaded={this.state.loaded}/>
        {!this.props.clickedNext ? <SignIn__Form loaded={this.state.loaded}/> : <SignIn__Validation input={this.props.input}/>}
        <SignIn__Instructions input={this.props.input} loaded={this.state.loaded} clickRefreshCount={this.props.clickRefreshCount}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clickedNext: state.clickedNext,
  input: state.input,
  clickRefreshCount: state.clickRefreshCount
});

export default connect(mapStateToProps)(SignIn);