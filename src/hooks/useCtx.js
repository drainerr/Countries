import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const CountriesCtx = createContext();

const CountriesContext = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState({
    name: '',
    region: '',
  });

  useEffect(() => {
    const fetchData = () => {
      fetch('https://restcountries.com/v2/all')
        .then((res) => res.json())
        .then((countriesData) => {
          setAllCountries(countriesData);
          setCountries(countriesData);
        });
      setFetched(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredCountries = allCountries.filter((country, i) => {
      const countryName = country.name.toLowerCase().trim();
      const chosenRegion = country.region.toLowerCase().trim();
      if (countryName.includes(filter.name) && chosenRegion.startsWith(filter.region))
        return country;
    });
    setCountries(filteredCountries);
  }, [filter]);

  return (
    <CountriesCtx.Provider
      value={{
        dark,
        setDark,
        countries,
        setCountries,
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
