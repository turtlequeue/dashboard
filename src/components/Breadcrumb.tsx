import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bulma';

function BreadCrumb() {
  return <nav className="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><a href="../">Bulma</a></li>
      <li><a href="../">Templates</a></li>
      <li><a href="../">Examples</a></li>
      <li className="is-active"><a href="#" aria-current="page">Admin</a></li>
    </ul>
  </nav>
}

export default BreadCrumb;
