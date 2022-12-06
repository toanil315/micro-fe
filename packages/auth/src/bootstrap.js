import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (
  el,
  { onNavigate, defaultHistory, initialPathName, onSignIn }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPathName],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  if (el) {
    ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);
  }

  return {
    onParentNavigate: ({ pathname: nextPathName }) => {
      const { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  mount(devRoot, { defaultHistory: createBrowserHistory() });
}

export { mount };
