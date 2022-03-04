import { useContext } from 'react';
import styled from 'styled-components';
import { CountriesCtx } from '../../contexts/countriesCtx';
import ListWrapper from './List';

const StyledDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme, dark }) => theme[`${dark}`].text};
  img {
    max-width: 450px;
    height:300px;
    margin-right: 10%;
  }
  div {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  div h1 {
    margin-bottom: 20px;
  }
  .borders{
    display:flex;
    gap:5px;
    align-items:center;
    margin-top:50px;
    flex-wrap:wrap;
  }
  .borders li {
    padding:2px 8px;
    box-shadow: 0px 0px 5px rgba(0,0,0,.15);
    background-color: ${({ theme, dark }) => theme[`${dark}`].elements};
    transition: color 1s ease-out, background-color .25s ease-out;

  }
  .borders h4{
    margin-right: 10px;
  }
 }
 @media(max-width:960px){
   flex-direction:column;
   align-items:start;
   padding-bottom:50px;
   div{
     align-items:center;
   }
   div h1{
     margin-top: 30px;
   }
   img{
     width:100%;
     max-width:unset;
     height:unset;
     max-height:350px;
   }
 }
 @media(max-width:640px){
   .borders h4{
     width:100%;
   }
 }
 @media(max-width:480px){
   div{
     align-items:start;
   }
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
          {borderCountries.length > 0 ? borderCountries.map((ctr) => <li>{`${ctr} `}</li>) : 'None'}
        </ul>
      </div>
    </StyledDetailsWrapper>
  );
};

export default DetailedInfo;
