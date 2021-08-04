import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* Menu */}
        <Menu />
        {/* Content */}
        <Switch>{this.defineRoute(routes)}</Switch>
      </Router>
    );
  }

  defineRoute = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return result;
  };
}
export default App;
