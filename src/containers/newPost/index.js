import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { Form, Popup } from 'semantic-ui-react';
import { submitPost } from '../../actions';
import { urlRegExp } from '../../utils';



export class NewPost extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  constructor() {
    super()
    this.state = {
      title: '',
      imageUrl: '',
      redirectAfterSubmit: false
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { title, imageUrl } = this.state
    this.props.submitNewPost(title, imageUrl);
    this.setState({ title: '', imageUrl: '', redirectAfterSubmit: true })
  }

  render() {
    const { title, imageUrl } = this.state
    const disableBtn = !(title && imageUrl) || !imageUrl.match(urlRegExp);
    if (this.state.redirectAfterSubmit === true) {
      return <Redirect to='/posts' />
    }
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
        <Popup
          content='Add users to your feed'
          // disabled={!disableBtn}
          trigger={<Form.Button
            disabled={disableBtn}
            content='Submit'
          />}
        />
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {
    submitNewPost: (title, imageUrl) => dispatch(submitPost({ postId: null, title, imageUrl }))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
