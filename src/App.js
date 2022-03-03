import Header from './Components/Header';
import GlobalStyle from './styles/Global';
import Find from './Components/Search-Filter/Find';
import { useContext } from 'react';
import { CountriesCtx } from './contexts/countriesCtx';
import Countries from './Components/Countries/CountriesWrapper';

function App() {
  const { dark } = useContext(CountriesCtx);
  return (
    <>
      <GlobalStyle dark={dark ? 'dark' : 'light'} />
      <Header />
      <Find />
      <Countries />
    </>
  );
}

export default App;
