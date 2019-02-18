import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import Post from '../../components/Post';
import Post from '../../containers/Post';
import styled from 'styled-components';
// import { upvote, downvote, getPostList, submitComment } from '../../actions';
import { Header, Dropdown, Segment } from 'semantic-ui-react';

const List = styled.div`
  display:flex;
  flex-direction: column;
`;

const CustomSegment = styled(Segment)`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: 'score',
    }
  }

  componentDidMount() {
    // this.props.getPostList();
  }

  sortBy = () => {
    switch (this.state.sortBy) {

      case 'score':
        return (a, b) => b.score - a.score;
      case 'date':
        return (a, b) => b.dateSubmitted - a.dateSubmitted
      default: return (a, b) => b.score - a.score;
    }
  }

  render() {
    const { roots } = this.props;
    let sortedRoots = this.state.revesre ? roots.sort(this.sortBy()).revesre() : roots.sort(this.sortBy())

    return (
      <List>
        <CustomSegment basic>
          <Header as='h2' floated='left'>Welcome to Autoditt</Header>
          <span>
          sort by: &nbsp;  
          <Dropdown
            direction='left'
            defaultValue={'rating'}
            onChange={(e, { value }) => this.setState({ sortBy: value })}
            options={[
              { key: 1, text: 'Rating', value: 'rating' },
              { key: 2, text: 'Date submitted', value: 'date' }
            ]} />
          </span>
        </CustomSegment>
        {sortedRoots.map((post) => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </List>
    )
  }
}

const mapStateToProps = (state) => ({
  roots: state.postList.filter((post) => {
    return post.parentId === null;
  })
})

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
