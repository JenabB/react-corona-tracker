import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import HospitalDetail from "./pages/HospitalDetail";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={HospitalDetail} />
        </Switch>
      </div>
    </Router>
  );
}
