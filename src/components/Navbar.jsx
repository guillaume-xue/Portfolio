import lightModeIcon from '../assets/light-mode.svg';
import nightModeIcon from '../assets/night-mode.svg';

function Navbar({ darkMode, setDarkMode, language, setLanguage }) {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    if (language === 'fr') {
      setLanguage('en');
    } else if (language === 'en') {
      setLanguage('fr');
    } else {
      setLanguage('fr');
    }
  };

  // Textes selon la langue
  const texts = {
    fr: {
      home: 'Accueil',
      about: 'À Propos',
      projects: 'Projets',
      resume: 'CV',
      contact: 'Contact'
    },
    en: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      resume: 'Resume',
      contact: 'Contact'
    }
  };

  const t = texts[language];

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <nav className="header-nav">
        <div className="header-container">
          {/* Logo/Brand */}
          <div className={`header-logo ${darkMode ? 'dark' : 'light'}`}>
            Portfolio
          </div>

          <div className="header-menu-container">
            {/* Navigation Menu */}
            <ul className="header-menu">
              <li>
                <a
                  href="#home"
                  className={`header-link ${darkMode ? 'dark' : 'light'}`}
                >
                  {t.home}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`header-link ${darkMode ? 'dark' : 'light'}`}
                >
                  {t.about}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`header-link ${darkMode ? 'dark' : 'light'}`}
                >
                  {t.projects}
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className={`header-link ${darkMode ? 'dark' : 'light'}`}
                >
                  {t.resume}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="header-contact-btn"
                >
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className={`language-toggle-btn ${darkMode ? 'dark' : 'light'}`}
              aria-label="Toggle language"
            >
              <span className="language-text">
                {language === 'fr' ? '🇫🇷 FR' : '🇺🇸 EN'}
              </span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`theme-toggle-btn ${darkMode ? 'dark' : 'light'}`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <img
                  src={lightModeIcon}
                  alt="Switch to light mode"
                  className="theme-icon invert"
                />
              ) : (
                <img
                  src={nightModeIcon}
                  alt="Switch to dark mode"
                  className="theme-icon"
                />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;