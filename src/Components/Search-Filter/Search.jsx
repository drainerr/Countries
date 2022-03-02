import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';
const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  font-size: 1.3em;
  max-width: 30%;
  color: gray;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px darkgray;
  input {
    border: none;
    outline: unset;
    width: 100%;
    margin-left: 5px;
    font-size: ${({ theme }) => theme.fontSize.homePg};
  }
`;

const Search = () => {
  return (
    <StyledSearch>
      <IoMdSearch />
      <input type="text" placeholder="Search for a country..." />
    </StyledSearch>
  );
};

export default Search;
