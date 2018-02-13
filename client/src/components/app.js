import React from 'react';
// import '../assets/css/app.css';
// import logo from '../assets/images/logo.svg';
import Signup from './signup';
import Signin from './signin';
import { Route } from 'react-router-dom';
import Nav from './nav';

import 'materialize-css/dist/css/materialize.min.css';
import Home from './home';

const App = () => (
    <div className="container">
        <Nav/>

        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
    </div>
);

export default App;
