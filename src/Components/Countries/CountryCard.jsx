import { useContext } from 'react';
import { CountriesCtx } from '../../contexts/countriesCtx';
import { Link } from 'react-router-dom';
import StyledCard from '../../styles/StyledCard';
import React from 'react';

const CountryCard = (props) => {
  const { dark } = useContext(CountriesCtx);
  const { name, population, region, capital, img } = props;
  return (
    <StyledCard dark={dark ? 'dark' : 'light'}>
      <Link to={`/countries/${props.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
      </Link>
    </StyledCard>
  );
};

export default CountryCard;
