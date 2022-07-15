// using ES6 modules
// import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/HomeScreen";
import Films from "./Components/Pages/FilmsScreen";
import LogInScreen from "./Components/Pages/LogInScreen";
import LandingScreen from "./Components/Pages/LandingScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/LogInScreen" component={LogInScreen} />
          <Route path="/LandingScreen" component={LandingScreen} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
