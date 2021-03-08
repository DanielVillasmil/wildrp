import React from "react";
import ReactDOM from "react-dom";
import BackgroundImage from '../../assets/img/imgs/cover.jpg'
import IndexNavbar from "components/Navbars/IndexNavbar.js";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        
        {/* <Route path="/privacy" render={(props) => <PrivacyInstr {...props} />} /> */}
        {/* <Redirect to="/index" />
        <Redirect from="/" to="/index" /> */}
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
  