import Header from './Components/Header';
import GlobalStyle from './styles/Global';
import Find from './Components/Search-Filter/Find';
import React, { useContext, Fragment } from 'react';
import Countries from './Components/Countries/CountriesWrapper';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Details from './Components/Details/Details';
import { CountriesCtx } from './hooks/useCtx';

function App() {
  const { dark } = useContext(CountriesCtx);
  return (
    <Fragment>
      <Router>
        <GlobalStyle dark={dark ? 'dark' : 'light'} />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Find />
                <Countries />
              </>
            }
          />
          <Route path="/countries/:name" element={<Details />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
