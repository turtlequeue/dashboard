import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bulma';
//import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import styled from 'styled-components';
import Header from './components/Header';
import Auth from './components/Auth';
import Topic from './components/Topic';
import Home from './components/Home';
import Connections from './components/Connections'
import Playground from './components/Playground';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import config from './config';

//
// a url path should contain ALL the information to get to a particular screen
//

// @ts-ignore
const wsLink = new WebSocketLink(config.apollo);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    wsLink
  ]),
  cache: new InMemoryCache()
});


const StyledApp = styled.div`
  font-family: InterUI, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif;
`

// TODO move to data-based routing
// https://reacttraining.com/react-router/web/example/route-config
// which later allows for breadcrumbs ex. https://github.com/icd2k3/react-router-breadcrumbs-hoc#readme
//
function App() {
  return (
    <ApolloProvider client={client}>
      <StyledApp className="container">
        {/* TODO simple header, changes color on alerts */}
        <Header />
        <Router basename={'/dashboard'}>
          <div className="columns">
            <div className="column is-3">
              <aside className="menu">
                <p className="menu-label"> Dashboard </p>
                <nav>
                  <ul className="menu-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/security">Security</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                    <li><Link to="/connections">Connections</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/playground">Playground</Link></li>
                  </ul>
                </nav>
              </aside>
            </div>
            <div className="column is-9">
              {/* placeholder for now */}
              {/* <nav className="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                  <li><a href="../">Bulma</a></li>
                  <li><a href="../">Templates</a></li>
                  <li><a href="../">Examples</a></li>
                  <li className="is-active"><a href="#" aria-current="page">Admin</a></li>
                  </ul>
                  </nav> */}
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Redirect exact from="/index.html" to="/" />
                <Route path="/security">
                  <Auth />
                </Route>
                <Route path="/topics">
                  <Topic />
                </Route>
                <Route path="/connections">
                  <Connections />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route path="/playground">
                  <Playground />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </StyledApp>
    </ApolloProvider>
  )
}

function Settings() {
  return <h2>Settings</h2>;
}

export default App;
