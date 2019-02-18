import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
height: 5em;
display:flex;
justify-content:space-around;
align-items:center;
background-color: whitesmoke;
font-size: 2em;
margin-bottom: 1em;
`;

const CustomLink = styled(Link)`
  &.disabled {
    color: grey;
    position: relative;
    cursor: not-allowed;
  }
`;

const Header = (props) => {
  const isUserLoggedIn = props.isLoggedIn()
  return (
    <Container>
      <CustomLink className={!isUserLoggedIn && 'disabled'} to='/newPost' >New Post</CustomLink>
      <CustomLink className={!isUserLoggedIn && 'disabled'} to='/posts'>Home</CustomLink>
      {isUserLoggedIn
        ? <CustomLink to='/login' onClick={props.logout}>Log out</CustomLink>
        : <CustomLink to='/login'>Login</CustomLink>
      }
    </Container>
  )
}

export default Header;
