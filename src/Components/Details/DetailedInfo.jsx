import { useContext } from 'react';
import styled from 'styled-components';
import { CountriesCtx } from '../../contexts/countriesCtx';

const StyledDetails = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme, dark }) => theme[`${dark}`].text};
  img {
    width: 450px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  }
`;

const DetailedInfo = ({ country }) => {
  const { dark } = useContext(CountriesCtx);
  const {
    name,
    nativeName,
    borderCountries,
    capital,
    currencies,
    domain,
    flag,
    languages,
    population,
    region,
    subregion,
  } = country;

  return (
    <StyledDetails dark={dark ? 'dark' : 'light'}>
      <img src={flag} alt="flag" />
      <div>
        <h1>{name}</h1>
        <h4>
          <span>Native Name: </span>
          {nativeName}
        </h4>
        <h4>
          <span>Population: </span>
          {population}
        </h4>
        <h4>
          <span>Region: </span>
          {region}
        </h4>
        <h4>
          <span>Sub Region: </span>
          {subregion}
        </h4>
        <h4>
          <span>Capital: </span>
          {capital}
        </h4>
        <h4>
          <span>Top Level Domain: </span>
          {domain}
        </h4>
        <h4>
          <span>Currencies: </span>
          {currencies.map((cur) => `${cur.name}`)}
        </h4>
        <h4>
          <span>Languages: </span>
          {languages.map((lng) => `${lng.name} `)}
        </h4>
      </div>
    </StyledDetails>
  );
};

export default DetailedInfo;
