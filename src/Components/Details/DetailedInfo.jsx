import { useContext } from 'react';
import { CountriesCtx } from '../../contexts/countriesCtx';
import ListWrapper from './List';
import StyledDetailsWrapper from '../../styles/StyledDetailsWrapper';

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
    <StyledDetailsWrapper dark={dark ? 'dark' : 'light'}>
      <img src={flag} alt="flag" />
      <div>
        <h1>{name}</h1>
        <ListWrapper
          country={{
            nativeName,
            population,
            region,
            subregion,
            capital,
            domain,
            currencies,
            languages,
          }}
        />
        <ul className="borders">
          <h4>Border Countries:</h4>
          {borderCountries.length > 0
            ? borderCountries.map((ctr, i) => <li key={i}>{`${ctr} `}</li>)
            : 'None'}
        </ul>
      </div>
    </StyledDetailsWrapper>
  );
};

export default DetailedInfo;
