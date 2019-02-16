/**
|--------------------------------------------------
| a post is either a link or a comment
|--------------------------------------------------
*/

import React, { Component } from 'react'
import styled from 'styled-components';
import Rating from '../Rating';
import { Form, Modal, Button, TextArea } from 'semantic-ui-react';

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
      // path: props.path ? `${props.path}_${props.post.id}` : props.post.id,
      isComment: false,
      comment: '',
    }
  }

  onUpvote = () => {
    const { post } = this.props
    if (post.userScore !== 1) {
      this.props.upvote(post.id)
    }
  }

  onDownvote = () => {
    const { post } = this.props
    if (post.userScore !== -1) {
      this.props.downvote(post.id)
    }
  }

  discardComment = () => {
    this.setState({ isComment: false, comment: '' })
  }

  onSubmitComment = () => {
    this.props.submitComment(this.state.comment, this.props.post.id)
    this.discardComment();
  }

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value })
  }

  render() {
    const { post, postList, downvote, upvote, submitComment } = this.props;
    const { showComments, level, isComment } = this.state;
    const postId = post.id;
    const comments = postList.filter(post => post.parentId === postId);
    const reducedList = this.props.postList.reduce((acc, post) => {
      const isDirectChild = post.parentId === postId;
      if (isDirectChild) {
        acc.directChildren.push(post)
      } else {
        acc.nthChildren.push(post)
      }
      return acc;
    },
      {
        directChildren: [],
        nthChildren: []
      }
    )
    return (
      <div>
        <Modal open={isComment} onClose={() => this.setState({ isComment: false })}>
          <Modal.Header>Say something nice - score useless points</Modal.Header>
          <Modal.Content>
            <Form>
              <TextArea
                autoHeight
                placeholder={`reply to ${post.userName}`}
                style={{ minHeight: 100 }}
                onChange={(e) => this.handleCommentChange(e)}
                value={this.state.comment}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.discardComment}>
              Discard
            </Button>
            <Button
              positive
              icon='comment'
              // labelPosition='right'
              content="Submit"
              onClick={this.onSubmitComment}
            />
          </Modal.Actions>
        </Modal>
        <Container level={level}>
          <Rating score={post.score} onUp={this.onUpvote} onDown={this.onDownvote} userScore={post.userScore}></Rating>
          <img src={post.imageUrl}></img>
          <Desc>
            <a href='#'>{post.title || post.text}</a>
            <span>Submitted on{new Date(post.dateSubmitted).toDateString()} by {post.userName}</span>
            <span className='comments' onClick={() => this.setState({ showComments: !showComments })}>{comments.length} comments</span>
            <span style={{ cursor: 'pointer' }} onClick={() => this.setState({ isComment: !this.state.isComment })} >reply</span>
          </Desc>
          {/* &nbsp;&nbsp;&nbsp;{this.state.path} */}
        </Container>
        {/* showComments && (comments || []).map(post => ( */}
        {
          showComments && reducedList.directChildren.map((post) => (
            <Post
              postList={reducedList.nthChildren}
              key={post.id}
              post={post}
              level={level}
              // path={this.state.path}
              upvote={upvote}
              downvote={downvote}
              submitComment={submitComment}
              expand
            />
          ))
        }
      </div>
    )
  }
}

export default Post