import backgroundImage from '../assets/background-1.jpg';
import '../styles/home.css';

function Home({ darkMode, language }) {
  // Textes selon la langue
  const texts = {
    fr: {
      welcome: 'Bienvenue sur mon Portfolio',
      subtitle: 'Développeur passionné créant des expériences numériques extraordinaires',
    },
    en: {
      welcome: 'Welcome to my Portfolio',
      subtitle: 'Passionate developer creating extraordinary digital experiences',
    }
  };

  const t = texts[language];

  // Appliquer l'image de fond via CSS custom property
  const sectionStyle = {
    '--bg-image': `url(${backgroundImage})`
  };

  return (
    <section
      id="home"
      className={`home-section ${darkMode ? 'dark' : 'light'}`}
      style={sectionStyle}
    >
      {/* Overlay pour améliorer la lisibilité du texte */}
      <div
        className={`home-overlay ${darkMode ? 'dark' : 'light'}`}
      ></div>

      {/* Contenu principal */}
      <div className="home-content">
        <h1 className="home-title">
          {t.welcome}
        </h1>
        <p className="home-subtitle">
          {t.subtitle}
        </p>
      </div>
    </section>
  );
}

export default Home;