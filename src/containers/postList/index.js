import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../../components/Post';
// import Post from '../../containers/Post';
import styled from 'styled-components';
import { upvote, downvote, getPostList, submitComment } from '../../actions';

const List = styled.div`
  display:flex;
  flex-direction: column;
`

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getPostList();
  }

  render() {
    const { upvote, downvote, postList, submitComment } = this.props;
    const reducedList = this.props.postList.reduce((acc, post) => {
      const isRoot = post.parentId === null;
      if (isRoot) {
        acc.root.push(post)
      } else {
        acc.children.push(post)
      }
      return acc
    },
      {
        root: [],
        children: []
      }
    )
    return (
      <List>
        <h1>Welcome to Autoditt</h1>
        {reducedList.root.map((post) => (
          <Post
            key={post.id}
            post={post}
            upvote={upvote}
            downvote={downvote}
            postList={reducedList.children}
            submitComment={submitComment}
          />
        ))}
      </List>
    )
  }
}

const mapStateToProps = (state) => ({
  postList: state.postList,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getPostList: () => dispatch(getPostList()),
    upvote: (postId) => dispatch(upvote({ postId })),
    downvote: (postId) => dispatch(downvote({ postId })),
    submitComment: (txt, postId) => dispatch(submitComment({ txt, postId }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
