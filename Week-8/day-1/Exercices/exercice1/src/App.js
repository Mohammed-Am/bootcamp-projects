import './App.css';
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <header className="App-header">
          <ThemeSwitcher />
          <p>
            The current theme is {theme}.
          </p>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
