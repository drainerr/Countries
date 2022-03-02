import styled from 'styled-components';

const StyledDropDownMenu = styled.ul`
  position: absolute;
  padding: 10px;
  background-color: white;
  width: 100%;
  border-radius: 5px;
  margin-top: 0.3rem;
  box-shadow: 0px 0px 2px darkgray;
  li {
    padding: 3px 10px;
    font-weight: 600;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.homePg};
    border: 1px solid transparent;
    border-radius: 3px;
  }
  li:hover {
    border-color: black;
    cursor: pointer;
  }
`;

const Regions = () => {
  return (
    <StyledDropDownMenu>
      <li>Africa</li>
      <li>America</li>
      <li>Asia</li>
      <li>Europe</li>
      <li>Oceania</li>
    </StyledDropDownMenu>
  );
};

export default Regions;
