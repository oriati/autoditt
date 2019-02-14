import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
  }

  onNameChange = (e) => {
    console.log(e.target.value);
    this.setState({ userName: e.target.value })
  }

  onEnterSite = () => {
    if (!this.state.userName) return null;
    this.props.login(this.state.userName)
  }

  render() {
    return (
      <div>
        <input onChange={this.onNameChange} type="text" placeholder="Enter your user name" />
        <button disabled={!this.state.userName} onClick={this.onEnterSite}>Enter site</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch({ type: "LOGIN" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
