import { useContext } from 'react';
import { CountriesCtx } from '../../contexts/countriesCtx';
import StyledDropDownMenu from '../../styles/StyledDropDownMenu';
import React from 'react';

const Regions = ({ show }) => {
  const { dark, filter, setFilter } = useContext(CountriesCtx);
  const filterList = (e) => {
    const selectedRegion = e.innerText.trim().toLowerCase();
    setFilter({ ...filter, region: selectedRegion });
  };
  return (
    <StyledDropDownMenu dark={dark ? 'dark' : 'light'} show={show}>
      <li onClick={() => setFilter({ ...filter, region: '' })}>Any</li>
      <li onClick={({ target }) => filterList(target)}>Africa</li>
      <li onClick={({ target }) => filterList(target)}>Americas</li>
      <li onClick={({ target }) => filterList(target)}>Asia</li>
      <li onClick={({ target }) => filterList(target)}>Europe</li>
      <li onClick={({ target }) => filterList(target)}>Oceania</li>
    </StyledDropDownMenu>
  );
};

export default Regions;
