import React from "react";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { themeActions } from "../store/theme";

const useStyles = makeStyles((theme) => ({
  switchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mode: {
    fontSize: ".7rem",
  },
}));

export default function ThemeModeSwitch({ isDarkMode }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(themeActions.changeTheme());
  };

  return (
    <div className={classes.switchContainer}>
      <Typography className={classes.mode}>Light</Typography>
      <Switch
        color="default"
        size="small"
        onChange={changeTheme}
        checked={isDarkMode}
      />
      <Typography className={classes.mode}>Dark</Typography>
    </div>
  );
}
