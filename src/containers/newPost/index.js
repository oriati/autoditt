import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class NewPost extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => {
  return {
    submitNewPost: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
