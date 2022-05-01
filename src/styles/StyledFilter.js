import styled from 'styled-components';
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
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
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
export default StyledFilter;
