import { useContext } from 'react';
import styled from 'styled-components';
import { CountriesCtx } from '../../contexts/countriesCtx';
import CountryCard from './CountryCard';

const StyledListWrapper = styled.div`
  width: 90%;
  margin-left: 5%;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

const Countries = () => {
  const { countries, loading, fetched } = useContext(CountriesCtx);
  return (
    <StyledListWrapper>
      <ul>
        {fetched && !loading
          ? countries.map((country) => {
              return (
                <CountryCard
                  img={country.flag}
                  name={country.name}
                  population={country.population}
                  capital={country.capital}
                  region={country.region}
                />
              );
            })
          : 'loading...'}
      </ul>
    </StyledListWrapper>
  );
};

export default Countries;
