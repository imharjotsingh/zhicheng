import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import "./App.css";
import Login from "./pages/Login";
import About from "./pages/About";
import Browser from "./components/Browser";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Testing from "./pages/MyCoursesTest";
import Courses from "./pages/testCourses.tsx";
import CourseStepper from "./components/CourseStepper.js";
import configureStore from "./store/configureStore";

const sampleData = require("./sampleData");

const store = configureStore();

function App(props) {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <Provider store={store} >
          <CssBaseline />
          <Router>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/browser" component={Browser} />
              <Route path="/createCourse" component={CourseStepper} />
              <Route
                path="/courses"
                render={(props) => <Courses courses={sampleData} />}
              />
              <Route path="/testing" component={Testing} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

// const Home = () => (
// 	<ThemeProvider theme={theme}>
// 		<CssBaseline />
// 		<Navbar />
// 		<h1> Home Page </h1>
// 	</ThemeProvider>
// );

export default App;
