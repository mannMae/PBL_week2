import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { useHistory, Route} from "react-router-dom";

import Header from "./components/Header";
import Button from "./elements/Button";
import Grid from "./elements/Grid";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import PostingList from "./pages/PostingList";

function App() {
  const history = useHistory();

  const is_login = true

  return (
    <div className="App">
      <Grid>
        <Header>
        </Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostingList}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/notice" exact component={Notice}/>
          <Route path="/write" exact component={Write}/>
        </ConnectedRouter>
        {is_login?<Button _onClick={()=>{
          history.push("/write")
        }} contents={"+"}/> : null}
      </Grid>
    </div>
  );
}

export default App;
