import { useContext } from 'react';
import styled from 'styled-components';
import { CountriesCtx } from '../../contexts/countriesCtx';
import CountryCard from './CountryCard';

const StyledListWrapper = styled.div`
  width: 90%;
  margin-top: 2rem;
  margin-left: 5%;
  padding-bottom: 50px;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 50px;
  }
  @media (max-width: 768px) {
    ul {
      justify-content: space-around;
    }
  } ;
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
                  key={country.id}
                  img={country.flag}
                  name={country.name}
                  population={country.population}
                  capital={country.capital}
                  region={country.region}
                />
              );
            })
          : 'Loading...'}
      </ul>
    </StyledListWrapper>
  );
};

export default Countries;
