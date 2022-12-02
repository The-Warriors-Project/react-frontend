import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

const styles = {
  bookInfoSection: {
    height: "25rem",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  description: {
    height: "80%",
    overflow: "auto",
  },
};

export default function BookContent() {
  return (
    <Grid container spacing={4} sx={styles.bookInfoSection} r>
      <Grid item xs={4} style={{ height: "100%" }}>
        <img
          src="https://m.media-amazon.com/images/I/91asIC1fRwL.jpg"
          style={styles.image}
          alt="book cover"
        ></img>
      </Grid>
      <Grid item xs={8} style={{ height: "100%" }}>
        <Grid container direction="column" style={{ height: "100%" }}>
          <Grid item>
            <Typography noWrap variant="h4">
              Book Title Goes Here
            </Typography>
          </Grid>
          <Grid item>
            <Typography noWrap variant="subtitle1">
              by Author1, Author2
            </Typography>
          </Grid>
          <Grid item>
            <Rating defaultValue={2.5} precision={0.5} readOnly />
          </Grid>
          <Grid item style={{ height: "60%", overflow: "auto" }}>
            <Typography variant="body1">Description</Typography>
            <Box sx={styles.description}>
              <Typography variant="body2">
                Since this Jolt-award winning classic was last updated in 2008,
                the Java programming environment has changed dramatically. Java
                7 and Java 8 introduced new features and functions including,
                forEach() method in Iterable interface, default and static
                methods in Interfaces, Functional Interfaces and Lambda
                Expressions, Java Stream API for Bulk Data Operations on
                Collections, Java Time API, Collection API improvements,
                Concurrency API improvements, and Java IO improvements. In this
                new edition of Effective Java, Bloch explores new design
                patterns and language idioms that have been introduced since the
                second edition was released in 2008 shortly after Java SE6,
                including Lambda, streams, generics and collections, as well as
                selected Java 9 features. As in previous editions, each chapter
                consists of several “items” presented in the form of a short,
                standalone essay that provides specific advice, insight into
                Java platform subtleties, and updated code examples. The
                comprehensive descriptions and explanations for each item
                illuminate what to do, what not to do, and why. Updated
                techniques and best practices on classic topics, including
                objects, classes, libraries, methods, and serialization How to
                avoid the traps and pitfalls of commonly misunderstood
                subtleties of the language Focus on the language and its most
                fundamental libraries: java.lang, java.util, and, to a lesser
                extent, java.util.concurrent and java.io
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button variant="contained">Rate and Review!</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
