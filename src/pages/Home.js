import { Typography } from "@mui/material";
import Cards from "../components/Cards";

export function Home() {
  return (
    <>
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        Reader Hub
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        paragraph
        gutterBottom
      >
        Your next book can't wait for your to find it...
      </Typography>
      <Cards subject="Featured Books"></Cards>
    </>
  );
}
