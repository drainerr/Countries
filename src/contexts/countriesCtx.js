import { createContext, useState, useEffect } from 'react';
export const CountriesCtx = createContext();

const CountriesContext = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        const countryData = data.map((country, i) => {
          return {
            id: i,
            name: country.name,
            nativeName: country.nativeName,
            population: country.population,
            region: country.region,
            subregion: country.subregion,
            capital: country.capital,
            domain: country.topLevelDomain,
            currencies: [...(country.currencies || [])],
            languages: [...country.languages],
            borderCountries: [...(country.borders || [])],
            flag: country.flag,
          };
        });
        setFetched(true);
        setAllCountries(countryData);
        setCountries(countryData);
        setLoading(false);
      });
  }, []);
  return (
    <CountriesCtx.Provider
      value={{ dark, setDark, allCountries, countries, setCountries, loading, fetched }}
    >
      {children}
    </CountriesCtx.Provider>
  );
};

export default CountriesContext;
