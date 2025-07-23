import "./App.css";
import Feet from "./components/Footer";
import Navigation from "./components/header";
import Main from "./components/Main";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <Projects />
      <Feet />
    </>
  );
}

export default App;
