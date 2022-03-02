import styled from 'styled-components';
import { BiChevronDown } from 'react-icons/bi';
import Regions from './Regions';

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  font-size: 110%;
  color: black;
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
`;

const StyledWrapper = styled.div`
  min-width: 15%;
  position: relative;
`;

const Filter = () => {
  return (
    <StyledWrapper>
      <StyledFilter>
        <p>Filter by Region</p>
        <span onClick={console.log('when i click this dropdown menu should appear')}>
          <BiChevronDown />
        </span>
      </StyledFilter>
      <Regions />
    </StyledWrapper>
  );
};

export default Filter;
