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

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

import CssBaseline from "@material-ui/core/CssBaseline";

import Image from "../content/background1.jpg";

// import "typeface-rubik";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: green,
  },
  status: {
    danger: "orange",
  },
  typography: {
    fontFamily: ["rubik", "Helvetica", "Arial", "sans-serif"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: "url(" + Image + ")",
        },
      },
    },
  },
});

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
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
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
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute exact path="/person" component={PersonBase} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/vehicle" component={VehicleBase} />
                {/* <Route path="/" component={PersonBase} /> */}
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </MuiThemeProvider>
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
