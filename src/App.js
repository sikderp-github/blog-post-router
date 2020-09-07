import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './Component/Posts/Posts';
import NoMatch from './Component/NoMatch/NoMatch';
import Home from './Component/Home/Home';
import Comments from './Component/Comments/Comments';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/post'>
            <Posts></Posts>
          </Route>
          <Route path='/posts/:postId/comments'>
            <Comments></Comments>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
