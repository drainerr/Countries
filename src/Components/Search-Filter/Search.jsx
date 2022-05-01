import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useContext } from 'react';
import { CountriesCtx } from '../../contexts/countriesCtx';
import { useState } from 'react';
import StyledSearch from '../../styles/StyledSearch';

const Search = () => {
  const { dark, filter, setFilter } = useContext(CountriesCtx);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.value);
    const inputName = e.value.toLowerCase();
    setFilter({ ...filter, name: inputName });
  };

  return (
    <StyledSearch dark={dark ? 'dark' : 'light'}>
      <IoMdSearch />
      <input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={({ target }) => handleChange(target)}
      />
    </StyledSearch>
  );
};

export default Search;
