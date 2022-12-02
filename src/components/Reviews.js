import { Grid, Paper, Typography, Rating } from "@mui/material";
import { Box } from "@mui/system";

const Review = () => {
  return (
    <Paper elevation={1} style={{ height: "10rem", padding: "1rem" }}>
      <Grid container direction="row" style={{ height: "100%" }}>
        <Grid item xs={4}>
          <Typography>User1</Typography>
        </Grid>
        <Grid item xs={8} style={{ height: "100%" }}>
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <Box style={{ height: "70%", overflow: "auto" }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pretium lacus sit amet blandit hendrerit. Mauris luctus diam sed
              aliquam maximus. Sed molestie turpis a auctor porttitor. Duis
              blandit metus justo, sed rutrum tellus hendrerit sit amet.
              Phasellus vestibulum est ac augue finibus viverra. Maecenas
              egestas, nisl eu congue efficitur, nisl purus consectetur quam, in
              aliquam orci justo nec dui. Fusce non justo risus. Maecenas in
              risus in quam aliquet facilisis. Donec fringilla, lacus sed
              efficitur eleifend, ante nibh molestie mi, at interdum neque felis
              eu tellus. Phasellus fermentum laoreet faucibus. Sed eget pretium
              erat, eget aliquam neque. Cras imperdiet consequat pretium. Proin
              blandit lacus quis malesuada pharetra. Sed interdum, quam quis
              pulvinar volutpat, purus odio commodo felis, sit amet cursus lacus
              leo eu ligula. Pellentesque vulputate pulvinar quam id vestibulum.
              Nullam mollis feugiat arcu, vel ultrices velit vulputate eget.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default function Reviews() {
  return (
    <>
      <Grid container direction="column" spacing={2} style={{ width: "100%" }}>
        <Grid item>
          <Typography variant="h4">Reviews</Typography>
        </Grid>
        <Grid item style={{ width: "100%" }}>
          <Grid direction="column" spacing={2} container>
            <Grid item>
              <Review></Review>
            </Grid>
            <Grid item>
              <Review></Review>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
