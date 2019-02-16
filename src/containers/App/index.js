import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import Header from '../../components/Header';
import Posts from '../../containers/PostList';
import NewPost from '../../containers/NewPost';
import Login from '../../containers/Login';
import { logout } from '../../actions';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const fakeAuth = {
  isAuthenticated: () => !!localStorage.getItem('userName'),
  // isAuthenticated: true,
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

  onLogout = () => {
    this.props.logout();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header isLoggedIn={() => fakeAuth.isAuthenticated()} logout={this.onLogout} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path='/posts' component={Posts} />
          <PrivateRoute path='/newPost' component={NewPost} />
          {/* <Route exact path="/posts" component={Posts} />
          <Route path="/newPost" component={NewPost} /> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
