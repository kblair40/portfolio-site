import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Subheader from "./Subheader";

const styles = {
  resumeHeader: {
    marginBottom: 0,
    color: "rgba(20, 20, 100, 1)",
  },
  content: {
    marginTop: ".2rem",
    color: "rgba(20, 20, 100, .8)",
  },
  bullets: {
    margin: 0,
  },
};

const ResumeSection = (props) => {
  const { classes, header, subheader, subheaderDetails, content, bullets } =
    props;

  const getBullets = (bullets) => {
    if (bullets) {
      return (
        <ul>
          {bullets.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  };

  const bulletsContent = getBullets(bullets);
  return (
    <React.Fragment>
      <h3 className={classes.resumeHeader}>{header}</h3>
      {bullets && <Subheader subheader={subheader} detail={subheaderDetails} />}
      <p className={classes.content}>{content}</p>
      <div className={classes.bullets}>{bulletsContent}</div>
    </React.Fragment>
  );
};

export default withStyles(styles)(ResumeSection);

// PROJECTS:
// Memory Card Game ReactJS, Material-UI, Axios, JSS live | github A web-based version of the classic 1-player card game, built with ReactJS and Material-UI
// ● Leveraged Material-UI framework to deliver a responsive app with DRY code.
// ● Designed the app using JSS and Material-UI’s ‘withStyles’ API to give each component it’s own local scope and prevent
// any potential class naming conflicts
// Stock Watchlist ReactJS, Material-UI, Recharts, JSS live | github A web app that allows users to add stocks of their choosing and query those stocks for specific details and price history
// ● Integrated Yahoo-Finance API with Recharts to display a stock’s price history dynamically according to the historical timeframe specified by the user.
// ● Built UI by leveraging Material-UI’s ‘withStyles’ API and custom JSS to reduce file structure complexity
// ● Overcame a major CORS issue preventing data retrieval with 3rd party browser extensions, and will ultimately setup a
// proxy server to make the API calls as a permanent fix.
