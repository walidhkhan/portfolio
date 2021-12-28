import { useContext } from "react";
import Toggle from "./components/toggle/Toggle";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/introduction/intro";
import ProjectList from "./components/projectList/ProjectList";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode && "white",
      }}>
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default App;