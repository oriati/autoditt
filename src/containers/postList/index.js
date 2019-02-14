import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../../components/Post';
import { GET_POST_LIST } from '../../constants';

export class PostList extends Component {
  static propTypes = {
    prop: PropTypes
  }
  componentDidMount() {
    this.props.getPostList();
  }

  render() {
    return (
      <div>
        this is PostList
      <Post></Post>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return {
    getPostList: () => dispatch({ type: GET_POST_LIST })
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PostList)
