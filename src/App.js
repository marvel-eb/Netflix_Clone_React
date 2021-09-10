// using ES6 modules
// import { Link } from "react-router-dom";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/HomeScreen";
import Films from "./Components/Pages/FilmsScreen";




function App() {
  return (
    <Router>
      
      <div className="App">
       <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/films" component={Films} />
        </Switch>
        <Footer/>
      </div>
    
    </Router>

  );
}

export default App;
