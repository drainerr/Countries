import { useContext } from 'react';
import styled from 'styled-components';
import { CountriesCtx } from '../../contexts/countriesCtx';

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
    border-radius: 5px 5px 0 0;
  }
  padding-bottom: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

const CountryCard = (props) => {
  const { dark } = useContext(CountriesCtx);
  const { name, population, region, capital, img } = props;
  return (
    <StyledCard dark={dark ? 'dark' : 'light'}>
      <img src={img} alt="flag" />
      <h3>{name}</h3>
      <h4>
        <span>Population: </span>
        {population}
      </h4>
      <h4>
        <span>Region: </span>
        {region}
      </h4>
      <h4>
        <span>Capital: </span>
        {capital}
      </h4>
    </StyledCard>
  );
};

export default CountryCard;
