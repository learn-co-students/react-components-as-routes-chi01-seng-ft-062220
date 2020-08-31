import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import About from './about'
import Login from './login'
import SignUp from './signup'
import Messages from './messages'
import Navbar from './navbar'
import {BrowserRouter, Route, NavLink} from 'react-router-dom';


ReactDOM.render(
  (<BrowserRouter >
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/messages' component={Messages} />
    </div>
  </BrowserRouter>),
  document.getElementById('root')
);
