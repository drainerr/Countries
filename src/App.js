import Header from './Components/Header';
import GlobalStyle from './styles/Global';
import { useState } from 'react';
function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <GlobalStyle dark={dark ? 'dark' : 'light'} />
      <Header dark={dark} setDark={setDark} />
    </>
  );
}

export default App;
