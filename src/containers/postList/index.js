import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../../components/post';

export class PostList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        this is post PostList
      <Post></Post>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
