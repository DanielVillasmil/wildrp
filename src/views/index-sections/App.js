import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "views/Main.js";
import Allowlist from "views/examples/Allowlist";
import Privacy from "views/examples/Privacy";
import Rules from "views/examples/Rules";
import Banappeal from "views/examples/Banappeal";
import Staffapp from "views/examples/Staffapp";
import Devapp from "views/examples/Devapp";
import Lawapp from "views/examples/Lawapp";
import Streamapp from "views/examples/Streamapp";
import Branding from "views/examples/Branding";
import Reportplayer from "views/examples/Reportplayer";
import Bugreport from "views/examples/Bugreport";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/index" component={Main} />
        
            <Route exact path="/allowlist" component={Allowlist} />

            <Route exact path="/privacy" component={Privacy} />

            <Route exact path="/rules" component={Rules} />
            
            <Route exact path="/report" component={Reportplayer} />

            <Route exact path="/bugs" component={Bugreport} />
           
            <Route exact path="/appeal" component={Banappeal} />
            
            <Route exact path="/staff" component={Staffapp} />
            
            <Route exact path="/developer" component={Devapp} />
            
            <Route exact path="/law" component={Lawapp} />
           
            <Route exact path="/streamers" component={Streamapp} />
            
            <Route exact path="/branding" component={Branding} />
    
        </Switch>
    </Router>
  );
}

export default App;