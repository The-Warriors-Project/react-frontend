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
import { truncate } from "../util";

const styles = {
  cardGrid: {
    py: 1,
  },
  card: {
    maxWidth: 345,
    // width: "15rem",
    height: "22rem",
  },
};

function MediaCard(props) {
  const { name, description, imageUrl, idx } = props;
  return (
    <Card sx={styles.card} key={idx}>
      <CardMedia component="img" height="140" image={imageUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncate(description, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More and Review!</Button>
      </CardActions>
    </Card>
  );
}

function Cards(props) {
  const { subject, captions, cardsData } = props;
  return (
    <Container maxWidth="md" sx={styles.cardGrid}>
      <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
        {subject}
      </Typography>
      {captions &&
        captions.map((caption, idx) => {
          return (
            <Typography
              variant="h6"
              align="left"
              color="textSecondary"
              paragraph
              gutterBottom
              key={idx}
            >
              {caption}
            </Typography>
          );
        })}
      <Grid container spacing={4}>
        {cardsData.map(({ title, description, picture }, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <MediaCard
              name={title}
              description={description ? description : ""}
              imageUrl={picture}
              key={idx}
            ></MediaCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cards;
