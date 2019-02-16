import React, { Component } from 'react'
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Vote = styled.i`
color: ${(props) => props.up ? 'lightgreen' : 'lightcoral'};
cursor:pointer;
`;

const Score = styled.span`
color: ${(props) => {
    if (props.score == 1) return 'lightgreen'
    if (props.score == -1) return 'lightcoral'
    if (props.score == 1) return 'black'
    }
  }
`;

export default class Rating extends Component {
  constructor(props) {
    super()
    this.state = {

    }
  }

  render() {
    const { score, onUp, onDown, userScore } = this.props
    return (
      <Column>
        <Vote className="fa fa-thumbs-up" up onClick={onUp}></Vote>
        <Score score={userScore}>
          {score}
        </Score>
        <Vote className="fa fa-thumbs-down" down onClick={onDown}></Vote>
      </Column>
    )
  }

}
