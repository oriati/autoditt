import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Post from '../../components/Post';
import Post from '../../containers/Post';
import { isEqual } from 'lodash';
import styled from 'styled-components';
import { Header, Dropdown, Segment } from 'semantic-ui-react';
import queryString from 'query-string';

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
  constructor() {
    super()
    this.state = {
      sortBy: 'score',
    }
    this.postsRefs = {}
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    if (values.item) {
      const interval = setInterval(() => {
        if (this.postsRefs[values.item]) {
          window.scrollTo(0, this.postsRefs[values.item].offsetTop);
          clearInterval(interval)
        }
      }, 100)
    }
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

  setRef = (postRef, postId) => {
    this.postsRefs[postId] = postRef
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
          <div key={post.id} ref={(postEl) => this.setRef(postEl, post.id)}>
            <Post
              rootId={post.id}
              post={post}
            />
          </div>
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
