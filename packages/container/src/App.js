import React, { Suspense, lazy, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import ProgressBar from "./components/ProgressBar";

const AuthApp = lazy(() => import("./components/AuthApp"));
const MarketingApp = lazy(() => import("./components/MarketingApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onSignIn = () => {
    setIsSignedIn(true);
  };

  const onSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth/*" children={<AuthApp onSignIn={onSignIn} />} />
            <Route path="/" children={<MarketingApp />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
