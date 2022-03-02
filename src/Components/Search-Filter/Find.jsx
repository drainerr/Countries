import styled from 'styled-components';
import Filter from './Filter';
import Search from './Search';
const StyledFind = styled.div`
  padding: 1rem 5%;
  margin: 1em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Find = () => {
  return (
    <StyledFind>
      <Search />
      <Filter />
    </StyledFind>
  );
};

export default Find;
