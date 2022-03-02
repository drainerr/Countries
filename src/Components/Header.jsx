import { HiOutlineMoon, HiMoon } from 'react-icons/hi';
import StyledHeader from '../styles/StyledHeader';

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
