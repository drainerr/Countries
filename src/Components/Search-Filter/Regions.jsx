import { useContext } from 'react';
import { CountriesCtx } from '../../hooks/useCtx';
import StyledDropDownMenu from '../../styles/StyledDropDownMenu';
import React from 'react';

const Regions = ({ show, setShowMenu }) => {
  const { dark, filter, setFilter } = useContext(CountriesCtx);

  const handleClick = (e) => {
    const selectedRegion = e.innerText.trim().toLowerCase();
    setFilter({ ...filter, region: selectedRegion });
    setShowMenu(false);
  };
  return (
    <StyledDropDownMenu dark={dark ? 'dark' : 'light'} show={show}>
      <li
        onClick={() => {
          setFilter({ ...filter, region: '' });
          setShowMenu(false);
        }}
      >
        All
      </li>
      <li onClick={({ target }) => handleClick(target)}>Africa</li>
      <li onClick={({ target }) => handleClick(target)}>Americas</li>
      <li onClick={({ target }) => handleClick(target)}>Asia</li>
      <li onClick={({ target }) => handleClick(target)}>Europe</li>
      <li onClick={({ target }) => handleClick(target)}>Oceania</li>
    </StyledDropDownMenu>
  );
};

export default Regions;
