import styled from 'styled-components';
import { useState } from 'react';
import { HiOutlineMoon, HiMoon } from 'react-icons/hi';

const StyledHeader = styled.header`
  background-color: ${({ theme, dark }) => theme[`${dark}`].elements};
  color: ${({ theme, dark }) => theme[`${dark}`].text};
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 5%;
  justify-content: space-between;
  button {
    display: flex;
    justify-content: center;
    background-color: white;
    border: none;
    font-size: 1rem;
    color: inherit;
    background-color: inherit;
    padding: 5px;
    border-radius: 5px;
    transition: 0.3s ease-out;
  }
  button:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px gray;
  }
  h4 {
    padding: 1rem 0px;
    font-size: 1.1rem;
  }
  p {
    color: inherit;
    margin-left: 5px;
    font-size: 0.9rem;
    font-weight: 300;
  }
  transition: color 1s ease-out, background-color 0.4s ease-out;
  box-shadow: 0px 0px 3.5px black;
`;

const Header = ({ dark, setDark }) => {
  return (
    <StyledHeader dark={dark ? 'dark' : 'light'}>
      <h4>Where is the world?</h4>
      <button onClick={() => setDark(!dark)}>
        {dark ? <HiMoon /> : <HiOutlineMoon />}
        <p>Dark Mode</p>
      </button>
    </StyledHeader>
  );
};

export default Header;
