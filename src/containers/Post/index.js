/**
|--------------------------------------------------
| a post is either a link or a comment
|--------------------------------------------------
*/

import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import Rating from '../../components/Rating';
import { upvote, downvote, submitPost } from '../../actions';

import { Form, Modal, Button, TextArea, Image } from 'semantic-ui-react';

const Container = styled.div`
  background:#f7f7f7;
  margin: 0.5em 0;
  padding: 0.5em;
  display:flex;
  align-items:center;
  margin-left: ${(props) => ((props.level - 1) * 2) + 'em'};
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
  margin-left:1em;
`;

class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      showComments: props.expand,
      level: (props.level || 0) + 1,
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
    const { post, submitComment } = this.props
    submitComment(this.state.comment, post.id)
    this.discardComment();
  }

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value })
  }


  render() {
    const { post, downvote, upvote, children } = this.props;
    const { showComments, level, isComment } = this.state;

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
          <Rating score={post.score} onUp={this.onUpvote} onDown={this.onDownvote} userScore={post.userScore} />
          {post.imageUrl && <Image src={post.imageUrl} size="tiny"></Image>}
          <Desc>
            <a href='#'>{post.title || post.text}</a>
            <span>Submitted on{new Date(post.dateSubmitted).toDateString()} by {post.userName}</span>
            <span className='comments' onClick={() => this.setState({ showComments: !showComments })}>{children.length} comments</span>
            <span style={{ cursor: 'pointer' }} onClick={() => this.setState({ isComment: !this.state.isComment })} >reply</span>
          </Desc>
          {/* &nbsp;{this.state.path} */}
        </Container>
        {showComments && (children.sort((a,b) => b.score - a.score) || []).map(childPost => (
          <PostWrapper
            key={childPost.id}
            post={childPost}
            expand
            level={level}
            // path={path}
            upvote={upvote}
            downvote={downvote}
          />
        ))}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    children: state.postList.filter((post) => post.parentId === ownProps.post.id),
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    upvote: (postId) => dispatch(upvote({ postId })),
    downvote: (postId) => dispatch(downvote({ postId })),
    submitComment: (text, postId) => dispatch(submitPost({ text, postId }))
  };
};

const PostWrapper = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostWrapper;