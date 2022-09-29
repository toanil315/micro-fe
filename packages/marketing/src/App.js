const { StylesProvider } = require("@material-ui/core");
const { BrowserRouter, Switch, Route } = require("react-router-dom");
import React from "react";
import LandingPage from "../components/Landing";
import Pricing from "../components/Pricing";

const App = () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} children={<LandingPage />} />
            <Route exact path={"/pricing"} children={<Pricing />} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;
