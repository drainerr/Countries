import { useEffect, useState } from 'react';

const useFetch = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [filter, setFilter] = useState({
    region: '',
    name: '',
  });

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        const filteredCountries = data.filter((country, i) => {
          const name = country.name.toLowerCase().trim();
          const region = country.region.toLowerCase().trim();
          console.log(name.includes(filter.name));
          if (name.startsWith(filter.name) && region.startsWith(filter.region)) return country;
        });
        setFetched(true);
        setCountries(filteredCountries);
        setLoading(false);
      });
  }, [filter]);
  return [countries, loading, fetched, setCountries, filter, setFilter];
};

export default useFetch;
