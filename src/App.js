import Header from './Components/Header';
import GlobalStyle from './styles/Global';
import { useState } from 'react';
import Find from './Components/Search-Filter/Find';
function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <GlobalStyle dark={dark ? 'dark' : 'light'} />
      <Header dark={dark} setDark={setDark} />
      <Find />
    </>
  );
}

export default App;
