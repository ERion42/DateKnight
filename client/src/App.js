import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm'
import Dashboard from './pages/Dashboard';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
