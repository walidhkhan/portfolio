import About from "./components/about/About";
import Intro from "./components/introduction/intro";
import ProjectList from "./components/projectList/ProjectList";

const App = () => {
  return (
  <div>
    <Intro/>
    <About/>
    <ProjectList/>
    </div>
  );
};

export default App;