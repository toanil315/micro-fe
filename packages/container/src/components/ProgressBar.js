import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    bar: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  };
});

const ProgressBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};

export default ProgressBar;
