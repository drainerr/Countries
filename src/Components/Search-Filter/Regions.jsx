import { useContext } from 'react';
import styled from 'styled-components';
import { CountriesCtx } from '../../contexts/countriesCtx';

const StyledDropDownMenu = styled.ul`
  position: absolute;
  padding: 10px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: ${({ theme, dark }) => theme[`${dark}`].elements};
  color: ${({ theme, dark }) => theme[`${dark}`].text};
  width: 100%;
  border-radius: 5px;
  margin-top: 0.3rem;
  box-shadow: 0px 0px 2px darkgray;
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
  const { dark } = useContext(CountriesCtx);
  return (
    <StyledDropDownMenu dark={dark ? 'dark' : 'light'} show={show}>
      <li>Africa</li>
      <li>America</li>
      <li>Asia</li>
      <li>Europe</li>
      <li>Oceania</li>
    </StyledDropDownMenu>
  );
};

export default Regions;
