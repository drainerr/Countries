import Header from './Components/Header';
import GlobalStyle from './styles/Global';
import Find from './Components/Search-Filter/Find';
import React, { useContext, Fragment } from 'react';
import { CountriesCtx } from './contexts/countriesCtx';
import Countries from './Components/Countries/CountriesWrapper';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Details from './Components/Details/Details';

function App() {
  const { dark } = useContext(CountriesCtx);
  return (
    <Fragment>
      <Router>
        <GlobalStyle dark={dark ? 'dark' : 'light'} />
        <Header />
        <Switch>
          <Route path="/" exact>
            <Find />
            <Countries />
          </Route>
          <Route path="/countries/:name">
            <Details />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
