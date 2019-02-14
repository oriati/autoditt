import React, { Component } from 'react'
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Vote = styled.i`
color: ${(props) => props.up ? 'lightgreen': 'lightcoral'};
cursor:pointer;
`


export default class Rating extends Component {
  constructor(props) {
    super()

    this.state = {

    }
  }

  render() {
    const { score, onUp, onDown } = this.props
    return (
      <Column>
        <Vote className="fa fa-thumbs-up" up onClick={onUp}></Vote>
        {score}
        <Vote className="fa fa-thumbs-down" down onClick={onDown}></Vote>
      </Column>
    )
  }

}
