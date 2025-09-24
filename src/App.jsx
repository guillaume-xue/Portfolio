import { useState } from 'react';

import Navbar from './components/Navbar.jsx';
import Body from './components/Body.jsx';

import './styles/App.css';
import './styles/header.css';
import './styles/index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('fr'); // État pour la langue

  return (
    <div>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <Body darkMode={darkMode} language={language} />
    </div>
  )
}

export default App