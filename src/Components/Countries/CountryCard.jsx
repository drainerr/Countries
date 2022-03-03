import styled from 'styled-components';

const StyledCard = styled.li`
  width: 280px;
  img {
    width: 100%;
  }
`;

const CountryCard = (props) => {
  const { name, population, region, capital, img } = props;
  return (
    <StyledCard>
      <img src={img} alt="flag" />
      <h4>{name}</h4>
      <p>
        <span>Population:</span>
        {population}
      </p>
      <p>
        <span>Region:</span>
        {region}
      </p>
      <p>
        <span>Capital:</span>
        {capital}
      </p>
    </StyledCard>
  );
};

export default CountryCard;
