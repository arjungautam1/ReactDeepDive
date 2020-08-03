import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';


function App() {
  return (
    <div className="App">
      <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Student Management System</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="left hide-on-med-and-down">
        <li><a href="sass.html">User Registration</a></li>
        <li><a href="badges.html">Address</a></li>
        <li><a href="collapsible.html">User</a></li>
        <li><a href="mobile.html">Grade</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
    </div>
  )
}

export default App