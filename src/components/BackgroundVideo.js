import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

import backgroundVideo from "../assets/background-video1.mp4";

const styles = {
  video: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: 0,
    zIndex: -1,
    objectFit: "cover",
  },

  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
  },

  text: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    padding: "1rem",
  },
};

export default function BackgroundVideo() {
  if (useLocation().pathname != "/") {
    return <></>;
  }

  return (
    <>
      <video src={backgroundVideo} autoPlay muted loop style={styles.video} />
      <div style={styles.overlay}></div>
      <div style={styles.text}>
        <Typography variant="h4" align="center" color="white" paragraph>
          Your next book can't wait for your to find it...
        </Typography>
      </div>
    </>
  );
}
