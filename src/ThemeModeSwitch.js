import React from "react";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  switchContainer: {
    // marginLeft: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mode: {
    fontSize: ".7rem",
  },
}));

export default function ThemeModeSwitch({ handleChange, isDarkMode }) {
  const classes = useStyles();
  return (
    <div className={classes.switchContainer}>
      <Typography variant="p" className={classes.mode}>
        Light
      </Typography>
      <Switch
        className={classes.switchBase}
        color="default"
        size="small"
        onChange={handleChange}
        checked={isDarkMode}
      />
      <Typography variant="p" className={classes.mode}>
        Dark
      </Typography>
    </div>
  );
}
