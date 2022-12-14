const {
  StylesProvider,
  createGenerateClassName,
} = require("@material-ui/core");
const { Router, Switch, Route } = require("react-router-dom");
import React from "react";
import LandingPage from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "marketing",
});

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} children={<LandingPage />} />
            <Route exact path={"/pricing"} children={<Pricing />} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
