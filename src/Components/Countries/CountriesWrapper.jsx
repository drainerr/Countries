import { useContext } from 'react';
import styled from 'styled-components';
import { CountriesCtx } from '../../hooks/useCtx';
import CountryCard from './CountryCard';
import React from 'react';

const StyledListWrapper = styled.div`
  width: 90%;
  margin-top: 2rem;
  margin-left: 5%;
  padding-bottom: 50px;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 50px;
  }
`;

const Countries = () => {
  const { countries, loading, fetched } = useContext(CountriesCtx);

  return (
    <StyledListWrapper>
      <ul>
        {fetched
          ? countries.map((country) => {
              return (
                <CountryCard
                  key={country.id}
                  img={country.flag}
                  name={country.name}
                  population={country.population}
                  capital={country.capital}
                  region={country.region}
                />
              );
            })
          : 'Data not found.'}
      </ul>
    </StyledListWrapper>
  );
};

export default Countries;
