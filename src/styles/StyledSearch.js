import styled from 'styled-components';

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, dark }) => theme[`${dark}`].elements};
  color: ${({ theme, dark }) => theme[`${dark}`].text};
  font-size: 1.3em;
  min-width: 30%;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);

  input {
    border: none;
    outline: unset;
    background-color: inherit;
    color: inherit;
    width: 100%;
    margin-left: 5px;
    background-color: ${({ theme, dark }) => theme[`${dark}`].elements};
    color: ${({ theme, dark }) => theme[`${dark}`].text};
    font-size: ${({ theme }) => theme.fontSize.homePg};
    transition: inherit;

    &::placeholder {
      color: inherit;
    }
  }
  transition: color 1s ease-out, background-color 0.25s ease-out;
  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;

export default StyledSearch;
