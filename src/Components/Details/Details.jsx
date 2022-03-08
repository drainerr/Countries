import styled from 'styled-components';
import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CountriesCtx } from '../../contexts/countriesCtx';
import DetailedInfo from './DetailedInfo';

const StyledWrapper = styled.div`
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: start;
  button {
    margin: 50px 0;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-size: 16px;
    color: ${({ theme, dark }) => theme[`${dark}`].text};
    background-color: ${({ theme, dark }) => theme[`${dark}`].elements};
    border: 1px solid transparent;
    transition: color 1s ease-out, background-color 0.25s ease-out, border 0.25s linear;
  }
  button span {
    padding-left: 5px;
  }
  button:hover {
    cursor: pointer;
    border-color: darkgray;
  }
`;

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { countries, fetched, loading, dark } = useContext(CountriesCtx);
  const country = countries.find((country) => country.name === name);

  return (
    <StyledWrapper dark={dark ? 'dark' : 'light'}>
      <button onClick={() => navigate('/')}>
        <HiArrowNarrowLeft /> <span>Back</span>
      </button>
      {fetched && !loading ? <DetailedInfo country={country} dark={dark} /> : 'Loading...'}
    </StyledWrapper>
  );
};

export default Details;
