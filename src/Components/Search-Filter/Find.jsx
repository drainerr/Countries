import styled from 'styled-components';
import Search from './Search';
const StyledFind = styled.div`
  padding: 1rem 5%;
  margin: 1em 0;
`;

const Find = () => {
  return (
    <StyledFind>
      <Search />
    </StyledFind>
  );
};

export default Find;
