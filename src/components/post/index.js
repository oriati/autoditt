import React, { Component } from 'react'
import styled from 'styled-components';
import Rating from '../Rating';

const Container = styled.div`
background:#eee;
  margin: 0.5em 0;
  padding: 0.5em;
  display:flex;
  align-items:center;
  margin-left: ${(props) => (props.level*2)+'em'};
  img{
    height:100px;
    margin: 0 0.5em;
  }
`;
const Desc = styled.div`
  display:flex;
  flex-direction:column;
  &>.comments{
    cursor:pointer;
  }
`;

export default class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      showComments: props.expand,
      level: (props.level || 0) + 1
    }
  }

  upvote = (postId) => {
    console.log('upvote', postId)
  }

  downvote = (postId) => {
    console.log('downvote', postId)
  }

  render() {
    const { post } = this.props
    const { showComments, level } = this.state
    return (
      <div>
        <Container level={level}>
          <Rating score={post.score} onUp={() => this.upvote(post.id)} onDown={() => this.downvote(post.id)}></Rating>
          {/* <div>rating {post.score}</div> */}
          <img src={post.imageUrl}></img>
          <Desc>
            <a href='#'>{post.title || post.text}</a>
            <span>Submitted on{new Date(post.dateSubmitted).toDateString()} by {post.userName}</span>
            {/* <span className='comments' onClick={() => this.setState({ showComments: !showComments })}>{post.comments.length} comments</span> */}
            <span className='comments' onClick={() => this.setState({ showComments: !showComments })}>xxx comments</span>
          </Desc>


        </Container>
        {showComments && (post.comments || []).map(post => (<Post key={post.id} post={post} expand level={level}></Post>))}
      </div>
    )
  }
}
