import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Header extends Component {
  render() {
    return (
      <div>
        Yo This is the header
        <Link to='/newPost'>new Post</Link>
        <Link to='/'>Home</Link> 
      </div>
    )
  }
}
