import { useContext } from 'react';
import { HiOutlineMoon, HiMoon } from 'react-icons/hi';
import { CountriesCtx } from '../contexts/countriesCtx';
import StyledHeader from '../styles/StyledHeader';

const Header = () => {
  const { dark, setDark } = useContext(CountriesCtx);
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
