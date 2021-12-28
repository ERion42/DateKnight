import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Define links here
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm'
import Profile from './Pages/Profile';
import Options from './Pages/Options';
import Event from './components/eventDate';
// import Dashboard from './Pages/Dashboard';
import Dashboard from './Pages/Dashboard2';
import Footer from './components/Footer';
// import Landing from './Pages/Landing';
import SiteContainer from './Pages/siteContainer';
import history from './utils/history';
import AboutPage from './Pages/About';

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
      <Router history={history}>
        <div>
          <NavBar />
          <Switch>
          {/* <Route path="/event" exact> <Event /> </Route> */}
            <Route exact path='/dashboard' component={Dashboard2} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/options" component={Options} />
            <Route exact path="/about" component={AboutPage} />
            <SiteContainer />
          </Switch>


          <Footer />
        </div>
      </Router>
    </ApolloProvider>

  )
}

export default App;
