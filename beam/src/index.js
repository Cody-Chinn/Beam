import ReactDOM from 'react-dom';
import './Styling Sheets/index.css';
import Home from './Components/Home';
import NavMenu from './Components/NavMenu';
import Profile from './Components/Profile';
import AddPost from './Components/AddPost';
import EditProfile from './Components/EditProfile'
import * as serviceWorker from './serviceWorker';
import history from './history'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  Route,
  Router
} from "react-router-dom";

ReactDOM.render(
  <Router history={history}>
    <NavMenu />
    <div className="content">
        <Route exact path="/" component={ Home }/>
        <Route path="/profile" component={ Profile }/>
        <Route path="/add-post" component={ AddPost }/>
        <Route path="/edit-profile" component={ EditProfile } />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
