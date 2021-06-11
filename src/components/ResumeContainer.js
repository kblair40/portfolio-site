import React from "react";
import Paper from "@material-ui/core/Paper";

const ResumeContainer = (props) => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <Paper style={{ padding: ".5rem" }}>{props.children}</Paper>
    </div>
  );
};

export default ResumeContainer;
