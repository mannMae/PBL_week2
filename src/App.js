import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Grid from "./elements/Grid";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Grid>
        <Header>

        </Header>
        <Switch>
          <Route path ="/login" exact component={Login}/>
        </Switch>
      </Grid>
    </div>
  );
}

export default App;
