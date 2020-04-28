import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/header";
import { PersonBase, VehicleBase } from "../components/body/body";
import { Route, Router, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { history } from "../_helpers";
import { alertActions } from "../actions";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { HomePage } from "../HomePage";

import { PrivateRoute } from "./../_components/PrivateRoute";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;

    return (
      <React.Fragment>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/css-toggle-switch/latest/toggle-switch.css"
          rel="stylesheet"
        />

        <div className="App">
          <Header />
          <Router history={history}>
            <Switch>
              {/* <PrivateRoute exact path="/" component={HomePage} /> */}
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              {/* <Route path="/person" component={PersonBase} /> */}
              <Route path="/vehicle" component={VehicleBase} />
              <Route path="/" component={PersonBase} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

// function mapState(state) {
//   const { alert } = state;
//   return { alert };
// }

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

// const connectedApp = connect(mapState, actionCreators)(App);

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
