/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import Allowlist from "views/examples/Allowlist";
import Reportplayer from "views/examples/Reportplayer.js";
import Privacy from "views/examples/Privacy.js";
import Bugreport from "views/examples/Bugreport.js";
import Rules from 'views/examples/Rules.js'
import Banappeal from "views/examples/Banappeal";
import Staffapp from "views/examples/Staffapp";
import Devapp from "views/examples/Devapp";
import Lawapp from "views/examples/Lawapp";
import Streamapp from "views/examples/Streamapp";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/allowlist"
          render={(props) => <Allowlist {...props} />}
        />
        <Route
          path="/privacy"
          render={(props) => <Privacy {...props} />}
        />
        <Route
          path="/rules"
          render={(props) => <Rules {...props} />}
        />
        <Route
          path="/bugs"
          render={(props) => <Bugreport {...props} />}
        />
        <Route
          path="/report"
          render={(props) => <Reportplayer {...props} />}
        />
        <Route
          path="/appeal"
          render={(props) => <Banappeal {...props} />}
        />
        <Route
          path="/staff"
          render={(props) => <Staffapp {...props} />}
        />
        <Route
          path="/developer"
          render={(props) => <Devapp {...props} />}
        />
        <Route
          path="/law"
          render={(props) => <Lawapp {...props} />}
        />
        <Route
          path="/streamers"
          render={(props) => <Streamapp {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
