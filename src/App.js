import "./App.css";
import About from "./Components/About";
import Extras from "./Components/Extras";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Connect from "./Components/Connect";
import Music from "./Components/Music";
import NotFound from "./Components/NotFound";
import Calculator from "./Components/Calculator/Calculator.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Photos from "./Components/Photos";
import Metronome from "./Components/Metronome/Metronome";
// import Resume from "./Components/Resume/Resume";
import Statistics from "./Components/Statistics";
import Courses from "./Components/Courses";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Project}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/connect" component={Connect}></Route>
          <Route path="/music" component={Music}></Route>
          <Route path="/calculator" component={Calculator}></Route>
          <Route path="/photos" component={Photos}></Route>
          <Route path="/metronome" component={Metronome}></Route>
          <Route path="/extras" component={Extras}></Route>
          {/* <Route path="/resume" component={Resume}></Route> */}
          <Route path="/statistics" component={Statistics}></Route>
          <Route path="/courses" component={Courses}></Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
