import AboutMe from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";

function Body({ darkMode, language }) {

  return (
    <main>
      {/* Section Home */}
      < Home darkMode={darkMode} language={language} />

      {/* Section About Me */}
      < AboutMe darkMode={darkMode} language={language} />

      {/* Section Projects */}
      < Projects darkMode={darkMode} language={language} />

      {/* Section Resume */}
      < Resume darkMode={darkMode} language={language} />

      {/* Section Contact */}
      < Contact darkMode={darkMode} language={language} />
    </main>
  );
}

export default Body;