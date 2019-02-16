import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
height: 8em;
display:flex;
justify-content:space-around;
align-items:center;
`;


export default class Header extends Component {

  render() {
    return (
      <Container>
        <Link to='/newPost'>new Post</Link>
        <Link to='/posts'>Home</Link>
        {this.props.isLoggedIn()
          ? <a style={{ cursor: 'pointer' }} onClick={this.props.logout}>Log out</a>
          : <Link to='/login'>Login</Link>
        }
      </Container>
    )
  }
}
