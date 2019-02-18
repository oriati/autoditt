import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { submitPost } from '../../actions';


export class NewPost extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  constructor(props) {
    super()
    this.state = {
      title: '',
      imageUrl:'',
    }
  }
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { title, imageUrl } = this.state
    this.props.submitNewPost(title, imageUrl);
    this.setState({ title: '', imageUrl: '' })
  }

  render() {
    const { title, imageUrl } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
          <Form.Input
            placeholder='Title'
            name='title'
            value={title}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder='Image url'
            name='imageUrl'
            value={imageUrl}
            onChange={this.handleChange}
          />
          <Form.Button content='Submit' />
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {
    submitNewPost: (title, imageUrl) => dispatch(submitPost({postId:null, title, imageUrl}))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
