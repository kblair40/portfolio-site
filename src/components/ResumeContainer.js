import React from "react";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";

const ResumeContainer = (props) => {
  return (
    <Fade in={true} timeout={700}>
      <div style={{ marginTop: "6rem" }}>
        <Paper style={{ padding: ".5rem" }}>{props.children}</Paper>
      </div>
    </Fade>
  );
};

export default ResumeContainer;
