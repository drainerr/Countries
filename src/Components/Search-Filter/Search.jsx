import styled from 'styled-components';
import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useContext } from 'react';
import { CountriesCtx } from '../../contexts/countriesCtx';
import { useState } from 'react';

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, dark }) => theme[`${dark}`].elements};
  color: ${({ theme, dark }) => theme[`${dark}`].text};
  font-size: 1.3em;
  min-width: 30%;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);

  input {
    border: none;
    outline: unset;
    background-color: inherit;
    color: inherit;
    width: 100%;
    margin-left: 5px;
    font-size: ${({ theme }) => theme.fontSize.homePg};
    &::placeholder {
      color: inherit;
    }
  }
  transition: color 1s ease-out, background-color 0.25s ease-out;
  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;

const Search = () => {
  const { dark, setCountries, allCountries } = useContext(CountriesCtx);
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.value);
    const inputName = e.value.toLowerCase();
    const filteredCountries = allCountries.filter((el) =>
      el.name.toLowerCase().startsWith(inputName)
    );
    setCountries(filteredCountries);
  };

  return (
    <StyledSearch dark={dark ? 'dark' : 'light'}>
      <IoMdSearch />
      <input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={({ target }) => handleChange(target)}
        onBlur={() => setValue('')}
      />
    </StyledSearch>
  );
};

export default Search;
