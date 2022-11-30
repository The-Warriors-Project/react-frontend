import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Container } from "@mui/system";
import { truncate } from "../util";

const styles = {
  cardGrid: {
    py: 1,
  },
  card: {
    maxWidth: 345,
    height: "23rem",
  },
  cardContent: {
    height: "45%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  cardContent_title: {
    height: "48%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  cardContent_content: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  cardActions: {
    height: "15%",
  },
  cardTitle: {
    height: "50%",
  },
  cardMedia: {
    height: "40%",
  },
};

function MediaCard(props) {
  const { name, description, imageUrl, idx } = props;
  return (
    <Card sx={styles.card} key={idx}>
      <CardMedia component="img" sx={styles.cardMedia} image={imageUrl} />
      <CardContent sx={styles.cardContent}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={styles.cardContent_title}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component="div"
          sx={styles.cardContent_content}
        >
          {truncate(description, 130)}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
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
