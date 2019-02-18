import React from 'react'
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:2em;
`;

const Vote = styled.i`
color: grey;
&:hover {
  color: ${(props) => props.up ? 'lightgreen' : 'lightcoral'};
}
cursor:pointer;
`;

const Score = styled.span`
color: ${(props) => {
    if (props.score === 1) return 'lightgreen'
    if (props.score === -1) return 'lightcoral'
    if (props.score === 1) return 'black'
  }
  }
`;

const formatScore =(score) => {
  const scoreStr = score.toString()
  let res = scoreStr;
  if (scoreStr.length > 3) res = `${scoreStr[0]}.${scoreStr[1]}K`;
  if (scoreStr.length > 5) res = `${scoreStr[0]}.${scoreStr[1]}M`;
  return res;
}

const Rating = (props) => {

  const { score, onUp, onDown, userScore } = props
  return (
    <Column>
      <Vote className="fa fa-thumbs-up" up onClick={onUp}></Vote>
      <Score score={userScore}>
        {formatScore(score)}
      </Score>
      <Vote className="fa fa-thumbs-down" down onClick={onDown}></Vote>
    </Column>
  )
}

export default Rating

