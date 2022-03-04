import styled from 'styled-components';

const StyledCard = styled.li`
  width: 250px;
  background-color: ${({ theme, dark }) => theme[`${dark}`].elements};
  color: ${({ theme, dark }) => theme[`${dark}`].text};
  h4 {
    font-weight: 300;
    padding-left: 10%;
  }
  h3 {
    padding: 5% 0 5% 10%;
  }
  h4 span {
    font-weight: 600;
  }
  img {
    width: 100%;
    height: 180px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }
  padding-bottom: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 960px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding-bottom: 2rem;
    h4 {
      font-size: 110%;
    }
    h3 {
      font-size: 140%;
    }
  }
`;
export default StyledCard;
