import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Subheader from "./Subheader";

const styles = {
  sectionContent: {
    marginBottom: "-1rem",
  },
  content: {},
  bullets: {
    marginTop: "-.5rem",
  },
};

const ResumeSection = (props) => {
  const {
    classes,
    subheader,
    liveLink,
    githubLink,
    subheaderDetails,
    content,
    bullets,
  } = props;

  const getBullets = (bullets) => {
    if (bullets) {
      return (
        <ul className={classes.bullets}>
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
    <div className={classes.sectionContent}>
      {bullets && (
        <Subheader
          subheader={subheader}
          detail={subheaderDetails}
          liveLink={liveLink}
          githubLink={githubLink}
          hasContent={content ? true : false}
        />
      )}
      {content && <p className={classes.content}>{content}</p>}
      {bulletsContent}
    </div>
  );
};

export default withStyles(styles)(ResumeSection);
