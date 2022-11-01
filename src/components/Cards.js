import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";

const styles = {
  cardGrid: {
    py: 1,
  },
  card: {
    maxWidth: 345,
  },
};

// When API works, fetch books via hooks and pass it to the component
// for now, a list of cards is created for front end demonstration purposes
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function MediaCard() {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Book description goes here...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function Cards(props) {
  const { subject } = props;
  return (
    <Container maxWidth="md" sx={styles.cardGrid}>
      <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
        {subject}
      </Typography>
      <Grid container spacing={4}>
        {cards.map(() => (
          <Grid item xs={12} sm={6} md={4}>
            <MediaCard></MediaCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cards;
