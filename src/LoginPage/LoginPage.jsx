import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";

import RmButton from "./../elements/button/rmButton";

import RmNavLink from "./../elements/button/rmNavLink";

import { withStyles } from "@material-ui/core/styles";

import Image from "react-bootstrap/Image";

import RmIcon from "../content/RMIClearBG.png";

const styles = (theme) => ({
  root: {
    paddingTop: "100px",
    width: "50%",
    margin: "auto",
  },
  panelBackground: {
    padding: "30px",
    backgroundColor: "#FFFFFF",
    margin: "auto",
    borderRadius: "2%",
    maxWidth: "500px",
  },
  desktopBackground: {
    padding: "30px",
    backgroundColor: "#ffffff",
    margin: "auto",
    borderRadius: "2%",
    minWidth: "150px",
    maxWidth: "500px",
  },
  flexFix: {
    display: "block",
  },
  rmIcon: {
    backgroundImage: "url(" + Image + ")",
  },
});

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;

    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <div className={classes.panelBackground}>
            <div className="">
              <Image className="img-fluid" src={RmIcon}></Image>
              <form name="form" onSubmit={this.handleSubmit}>
                <div
                  className={
                    "form-group" + (submitted && !username ? " has-error" : "")
                  }
                >
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  {submitted && !username && (
                    <div className="help-block">Username is required</div>
                  )}
                </div>
                <div
                  className={
                    "form-group" + (submitted && !password ? " has-error" : "")
                  }
                >
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  {submitted && !password && (
                    <div className="help-block">Password is required</div>
                  )}
                </div>
                <div className="form-group">
                  <RmButton label="LOGIN"></RmButton>
                  {loggingIn && (
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  )}

                  <p style={{ textAlign: "center", paddingTop: "10px" }}>
                    - OR -
                  </p>
                  <RmNavLink label="REGISTER" to="/register"></RmNavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
  };
}

const connectedLoginPage = connect(mapStateToProps)(
  withStyles(styles)(LoginPage)
);

export { connectedLoginPage as LoginPage };
