import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from "./App";
import UpLoad from "./UpLoad";
import NotFound from "./NotFound";

class Routers extends React.Component {
  render() {
    return (
      <Router>
      <>
        <Link to="/" />
        <Link to="/upload" />
        <Link to="/notfound" />
        <Switch>
          <Route path="/" component={App} />
          <Route path="/upload" component={UpLoad} />
          <Route path="/notfound" component={NotFound} />
        </Switch>
      </>
      </Router>
    );
  }
}

export default Routers;
