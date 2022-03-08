import styled from 'styled-components';
import React from 'react';
const StyledListWrapper = styled.ul`
  display: flex;
  align-items: start;
  justify-content: space-between;
  ul li {
    margin-top: 3px;
  }
  ul li span {
    font-weight: 800;
  }
  @media (max-width: 960px) {
    width: 100%;
    justify-content: space-around;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ListWrapper = ({ country }) => {
  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    domain,
    currencies,
    languages,
  } = country;
  return (
    <StyledListWrapper>
      <li>
        <ul>
          <li>
            <span>Native Name: </span>
            {nativeName}
          </li>
          <li>
            <span>Population: </span>
            {population}
          </li>
          <li>
            <span>Region: </span>
            {region}
          </li>
          <li>
            <span>Sub Region: </span>
            {subregion}
          </li>
          <li>
            <span>Capital: </span>
            {capital}
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <span>Top Level Domain: </span>
            {domain}
          </li>
          <li>
            <span>Currencies: </span>
            {currencies.map((cur) => `${cur.name}`)}
          </li>
          <li>
            <span>Languages: </span>
            {languages.map((lng) => `${lng.name} `)}
          </li>
        </ul>
      </li>
    </StyledListWrapper>
  );
};

export default ListWrapper;
