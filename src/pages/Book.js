import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import BookContent from "../components/BookContent";
import Reviews from "../components/Reviews";

export function Book() {
  const { id } = useParams();

  console.log("param here", id);
  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <BookContent></BookContent>
        </Grid>
        <Grid item>
          <Reviews></Reviews>
        </Grid>
      </Grid>
    </>
  );
}
