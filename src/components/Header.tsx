import React from 'react';
import "react-router-dom";
import 'bulma';
import logo from '../assets/logo_black.png'

//
// OR breadcrumb?
//
function Header() {

  return <header className="App-header">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="turtle logo" />
        </a>
      </div>

      {/* <div id="navbarTop" className="navbar-menu is-active">
          <div className="navbar-start">
          <a className="navbar-item" href="/">
          Home
          </a>
          <a className="navbar-item" href="https://turtlequeue.com/doc/latest/overview.html">
          Documentation
          </a>
          </div>
          </div> */}
    </nav>
  </header>;
}

export default Header;
