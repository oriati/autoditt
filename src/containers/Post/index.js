/**
|--------------------------------------------------
| a post is either a link or a comment
|--------------------------------------------------
*/

import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import Rating from '../../components/Rating';

const Container = styled.div`
background:#eee;
  margin: 0.5em 0;
  padding: 0.5em;
  display:flex;
  align-items:center;
  margin-left: ${(props) => (props.level * 2) + 'em'};
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

class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      showComments: props.expand,
      level: (props.level || 0) + 1,
      path: props.path ? `${props.path}_${props.post.id}` : props.post.id
    }
  }

  upvote = () => {
    // this.props.upvote(this.state.path, this.props.post.id)
    this.props.upvote(this.props.post.id)
  }

  downvote = () => {
    // this.props.downvote(this.state.path, this.props.post.id)
    this.props.downvote(this.props.post.id)
  }

  render() {
    const { post, downvote, upvote, postList } = this.props;
    const { showComments, level, path } = this.state;
    const postId = post.id;
    const comments = postList.filter(post => post.parentId === postId);

    return (
      <div>
        <Container level={level}>
          <Rating score={post.score} onUp={this.upvote} onDown={this.downvote}></Rating>
          <img src={post.imageUrl}></img>
          <Desc>
            <a href='#'>{post.title || post.text}</a>
            <span>Submitted on{new Date(post.dateSubmitted).toDateString()} by {post.userName}</span>
            <span className='comments' onClick={() => this.setState({ showComments: !showComments })}>{comments.length} comments</span>
          </Desc>
          &nbsp;&nbsp;&nbsp;{this.state.path}


        </Container>
        {showComments && (postList.filter((post => post.parentId === postId)) || []).map(post => (
          <Post
            postList={postList}
            key={post.id}
            post={post}
            expand
            level={level}
            path={path}
            upvote={upvote}
            downvote={downvote}
          />
        ))}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  postList: state.postList
})

const mapDispatchToProps = (dispatch) => {
  return {
    // getPostList: () => dispatch(getPostList()),
    // upvote: (pathStr, id) =>dispatch(upvote({pathStr, id})),
    // downvote: (pathStr, id) =>dispatch(downvote({pathStr, id}))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Post)