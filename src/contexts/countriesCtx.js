import React from 'react';
import { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
export const CountriesCtx = createContext();

const CountriesContext = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [countries, loading, fetched, setCountries, filter, setFilter] = useFetch();
  useFetch();
  return (
    <CountriesCtx.Provider
      value={{
        dark,
        setDark,
        countries,
        setCountries,
        loading,
        fetched,
        filter,
        setFilter,
      }}
    >
      {children}
    </CountriesCtx.Provider>
  );
};

export default CountriesContext;
