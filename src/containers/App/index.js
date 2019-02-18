import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import styled from 'styled-components';
import Header from '../../components/Header';
import Posts from '../../containers/PostList';
import NewPost from '../../containers/NewPost';
import Login from '../../containers/Login';
import { login, logout, getPostList } from '../../actions';
// import createBrowserHistory from 'history/createBrowserHistory'

const RouterContainer = styled.div`
padding: 0 1em;
`

const fakeAuth = {
  isAuthenticated: () => !!localStorage.getItem('userName')
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(fakeAuth.isAuthenticated());
  return (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated() === true
        ? <Component {...props} />
        : <Redirect to={{
          pathname: 'login',
          state: { from: props.location }

        }} />
    )} />
  )
}

class App extends Component {

  componentDidMount() {
    const userName = localStorage.getItem('userName')
    this.props.attemptLogin(userName);
    this.props.getPostList();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header isLoggedIn={() => fakeAuth.isAuthenticated()} logout={this.props.logout} />
          <RouterContainer>
            <Route exact path="/login" component={Login} />
            <PrivateRoute path='/posts' component={Posts} />
            <PrivateRoute path='/newPost' component={NewPost} />
            {/* <Route exact path="/posts" component={Posts} />
          <Route path="/newPost" component={NewPost} /> */}
          </RouterContainer>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (userName) => dispatch(login({ userName })),
    getPostList: () => dispatch(getPostList()),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
