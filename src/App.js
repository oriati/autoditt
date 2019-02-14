import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Posts from './containers/PostList';
import NewPost from './containers/NewPost';
import Login from './containers/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Login} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/newPost" component={NewPost} />
          </div>
      </Router>
        );
      }
    }

export default App;
