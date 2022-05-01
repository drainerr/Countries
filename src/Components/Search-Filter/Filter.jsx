import React from 'react';
import styled from 'styled-components';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import Regions from './Regions';
import { useContext, useState } from 'react';
import { CountriesCtx } from '../../contexts/countriesCtx';
import StyledFilter from '../../styles/StyledFilter';

const StyledWrapper = styled.div`
  min-width: 15%;
  position: relative;
  p {
    text-transform: capitalize;
  }
`;

const Filter = () => {
  const { dark, filter } = useContext(CountriesCtx);

  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledWrapper>
      <StyledFilter dark={dark ? 'dark' : 'light'}>
        <p>{filter.region ? filter.region : 'Filter by Region'}</p>
        <span onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <BiChevronUp /> : <BiChevronDown />}
        </span>
      </StyledFilter>
      <Regions show={showMenu} />
    </StyledWrapper>
  );
};

export default Filter;
