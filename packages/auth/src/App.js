const {
  StylesProvider,
  createGenerateClassName,
} = require("@material-ui/core");
const { Router, Switch, Route } = require("react-router-dom");
import React from "react";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
});

const App = ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route
              path="/auth/signin"
              children={<SignIn onSignIn={onSignIn} />}
            />
            <Route
              path="/auth/signup"
              children={<SignUp onSignIn={onSignIn} />}
            />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
