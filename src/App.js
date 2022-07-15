import React, { Component } from "react";
import { auth, handleUserProfile } from "./firebase/utils";

// using ES6 modules
// import { Link } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Header from "./Components/Layout/Header";
// import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/MainPages/HomeScreen";
import FilmsScreen from "./Components/Pages/MainPages/FilmsScreen";
import LandingScreen from "./Components/Pages/UserPages/LandingScreen";
import LogInScreen from "./Components/Pages/UserPages/LogInScreen";
import RegistrationScreen from "./Components/Pages/UserPages/RegistrationScreen";
import RecoveryScreen from "./Components/Pages/UserPages/RecoveryScreen";
import DashboardScreen from "./Components/Pages/UserPages/DashboardScreen";
import LogOutScreen from "./Components/Pages/UserPages/LogOutScreen";
import ModalContent from "./Components/Contents/MovieContents/ModalContent";
import DemoEphremCategories from "./Components/Contents/DemoEphremCategories";
const initialState = {
  currentUser: null,
};

// function App() {  // RESERVED //
// class App extends React.Component { // RESERVED //
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }
  authListener = null;
  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      // if (!userAuth) {
      //   this.setState({
      //     ...initialState,
      //   });
      // }
      // RESERVED
      this.setState({
        currentUser: userAuth,
      });

      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router>
        <div className="App">
          {/* <Header /> */}
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
              render={() => <Home currentUser={currentUser} />}
            />

            {/* <Route path="/FilmsScreen" component={FilmsScreen} />
            <Route path="/LandingScreen" component={LandingScreen} /> */}

            <Route
              path="/FilmsScreen"
              render={() => <FilmsScreen currentUser={currentUser} />}
            />
            <Route
              path="/LandingScreen"
              render={() => <LandingScreen currentUser={currentUser} />}
            />

            <Route
              path="/LogInScreen"
              render={() =>
                currentUser ? (
                  <Redirect to="/DashboardScreen" />
                ) : (
                  <LogInScreen currentUser={currentUser} />
                )
              }
            />

            <Route
              path="/LogOutScreen"
              render={() =>
                !currentUser ? (
                  // <Redirect to="/LogInScreen" />
                  <Redirect to="/LandingScreen" />
                ) : (
                  <LogOutScreen currentUser={currentUser} />
                )
              }
            />

            <Route
              path="/DashboardScreen"
              render={() =>
                !currentUser ? (
                  <Redirect to="/LogInScreen" />
                ) : (
                  <DashboardScreen currentUser={currentUser} />
                )
              }
            />

            <Route
              path="/RegistrationScreen"
              render={() =>
                currentUser ? (
                  <Redirect to="/DashboardScreen" />
                ) : (
                  <RegistrationScreen currentUser={currentUser} />
                )
              }
            />
            <Route path="/RecoveryScreen" component={RecoveryScreen} />
            <Route path="/DemoEphremCategories" component={DemoEphremCategories} />
          </Switch>
          <Route path="/" render={(props) => <ModalContent {...props} />} />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}
export default App;
