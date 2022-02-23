import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Grid from "./elements/Grid";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import Signin from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Grid>
        <Header>
        </Header>
        <Switch>
          <Route path ="/login" exact component={Login}/>
          <Route path ="/signin" exact component={Signin}/>
          <Route path ="/notice" exact component={Notice}/>
        </Switch>
      </Grid>
    </div>
  );
}

export default App;
