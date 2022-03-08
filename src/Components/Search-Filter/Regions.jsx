import { useContext } from 'react';
import styled from 'styled-components';
import { CountriesCtx } from '../../contexts/countriesCtx';

import React from 'react';
const StyledDropDownMenu = styled.ul`
  position: absolute;
  padding: 10px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: ${({ theme, dark }) => theme[`${dark}`].elements};
  color: ${({ theme, dark }) => theme[`${dark}`].text};
  width: 100%;
  border-radius: 5px;
  margin-top: 0.3rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);

  li {
    padding: 3px 10px;
    font-weight: 600;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.homePg};
    // border: 1px solid transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    user-select: none;
  }
  li:hover {
    border-color: darkgray;
    cursor: pointer;
  }
  transition: color 1s ease-out, background-color 0.25s ease-out;
`;

const Regions = ({ show }) => {
  const { dark, allCountries, setCountries, countries } = useContext(CountriesCtx);
  const filterList = (e) => {
    const selectedRegion = e.innerText.trim();
    const filteredCountries = allCountries.filter((c) => c.region === selectedRegion);
    setCountries(filteredCountries);
  };
  const displayAll = () => {
    setCountries(allCountries);
  };
  return (
    <StyledDropDownMenu dark={dark ? 'dark' : 'light'} show={show}>
      <li onClick={() => displayAll()}>Any</li>
      <li onClick={({ target }) => filterList(target)}>Africa</li>
      <li onClick={({ target }) => filterList(target)}>Americas</li>
      <li onClick={({ target }) => filterList(target)}>Asia</li>
      <li onClick={({ target }) => filterList(target)}>Europe</li>
      <li onClick={({ target }) => filterList(target)}>Oceania</li>
    </StyledDropDownMenu>
  );
};

export default Regions;
