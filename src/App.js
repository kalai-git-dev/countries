import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/about" exact component={About} />

        <Route path="/country/:name" exact component={Country} />

        <Route path="/" exact component={Home} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
