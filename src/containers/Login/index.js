import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions';
import { Container, Input, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      redirectToRefferer: false,
    }
  }

  onNameChange = (e) => {
    this.setState({ userName: e.target.value })
  }

  onEnterSite = () => {
    if (!this.state.userName) return null;
    this.props.login(this.state.userName)
    this.setState({ redirectToRefferer: true })
  }

  render() {
    const { redirectToRefferer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/posts' } }
    if (redirectToRefferer) return <Redirect to={from} />

    return (
      <Container textAlign='center'>
        <h1>Autoditt</h1>
        <h3>Please log in</h3>
        <Input onChange={this.onNameChange} type="text" placeholder="Enter your user name"
          action={<Button positive disabled={!this.state.userName} onClick={this.onEnterSite}>Enter site</Button>}
        />
      </Container>
    )
  }

}

const mapStateToProps = (state) => ({
  userName: state.userName
})

const mapDispatchToProps = dispatch => {
  return {
    login: (userName) => dispatch(login({ userName }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
