import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "views/Main.js";
import Allowlist from "views/examples/Allowlist";

function App() {
  return (
    <Router>
      
        <Switch>
            <Route exact path="/index" component={Main} />
        
            <Route exact path="/allowlist" component={Allowlist} />

            <Route exact path="/allowlist" component={Allowlist} />

            <Route exact path="/allowlist" component={Allowlist} />
        </Switch>

    </Router>
  );
}

export default App;