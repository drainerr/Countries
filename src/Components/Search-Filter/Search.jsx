import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useContext } from 'react';
import { CountriesCtx } from '../../hooks/useCtx';
import { useState } from 'react';
import StyledSearch from '../../styles/StyledSearch';

const Search = () => {
  const { dark, setFilter, filter } = useContext(CountriesCtx);
  const [value, setValue] = useState('');

  const handleInput = (e) => {
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
        onInput={({ target }) => handleInput(target)}
      />
    </StyledSearch>
  );
};

export default Search;
