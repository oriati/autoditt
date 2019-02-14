import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../../components/Post';
import { GET_POST_LIST } from '../../constants';
import styled from 'styled-components';

const List = styled.div`
display:flex;
flex-direction: column;
`

export class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getPostList();
  }

  render() {
    return (
      <List>
        this is PostList
        {this.props.postList.map((post) => (<Post key={post.id} post={post}/>))}
      </List>
    )
  }
}

const mapStateToProps = (state) => ({
  postList: state.postList
})

const mapDispatchToProps = (dispatch) => {
  return {
    getPostList: () => dispatch({ type: GET_POST_LIST })
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PostList)
