import styled from 'styled-components';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import Regions from './Regions';
import { useContext, useState } from 'react';
import { CountriesCtx } from '../../contexts/countriesCtx';

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, dark }) => theme[`${dark}`].elements};
  color: ${({ theme, dark }) => theme[`${dark}`].text};
  padding: 10px;
  font-size: 110%;
  border-radius: 5px;
  font-weight: 600;
  box-shadow: 0px 0px 2px darkgray;
  p {
    font-size: ${({ theme }) => theme.fontSize.homePg};
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span:hover {
    cursor: pointer;
  }
  user-select: none;
  transition: color 1s ease-out, background-color 0.25s ease-out;
`;

const StyledWrapper = styled.div`
  min-width: 15%;
  position: relative;
`;

const Filter = () => {
  const { dark } = useContext(CountriesCtx);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledWrapper>
      <StyledFilter dark={dark ? 'dark' : 'light'}>
        <p>Filter by Region</p>
        <span onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <BiChevronUp /> : <BiChevronDown />}
        </span>
      </StyledFilter>
      <Regions show={showMenu} />
    </StyledWrapper>
  );
};

export default Filter;
