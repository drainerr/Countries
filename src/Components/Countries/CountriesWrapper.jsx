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
    display: flex;
    flex-wrap: wrap;
    gap: 70px 20px;
    justify-content: space-between;
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
