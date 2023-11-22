import "./App.css";
import Card from "./components/Card/Card";
import CSSArt from "./components/CSSArt/CSSArt";
import Introduction from "./components/Introduction/Introduction";
import Lego from "./components/Lego/Lego";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import SmartHome from "./components/SmartHome/SmartHome";
import Sparkline from "./components/Sparkline/Sparkline";

function App() {
  return (
    <div className="app">
      <Card>
        <Introduction />
      </Card>
      <Card>
        <Skills />
      </Card>
      <Card>
        <Project
          title="Frontend Cards"
          githubLink="https://github.com/daugerdas/frontend-cards"
        />
      </Card>
      <Card>
        <Sparkline />
      </Card>
      <Card>
        <Project
          title="remoteworkspots.com"
          githubLink="https://github.com/daugerdas/remoteworkspots.com"
        />
      </Card>
      <Card>
        <Lego />
      </Card>
      <Card>
        <Project
          title="frontendintro.com"
          githubLink="https://github.com/daugerdas/frontendintro.com"
        />
      </Card>
      <Card>
        <CSSArt />
      </Card>
      <Card>
        <SmartHome />
      </Card>
    </div>
  );
}

export default App;
