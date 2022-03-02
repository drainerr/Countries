import styled from 'styled-components';

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
    align-items: center;
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
    font-size: 1.2rem;
  }
  p {
    color: inherit;
    margin-left: 5px;
    font-size: 0.9em;
    font-weight: 600;
  }
  transition: color 1s ease-out, background-color 0.25s ease-out;
  box-shadow: 0px 0px 3.5px black;
`;

export default StyledHeader;
