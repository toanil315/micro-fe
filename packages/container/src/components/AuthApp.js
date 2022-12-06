import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      initialPathName: history.location.pathname,
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
