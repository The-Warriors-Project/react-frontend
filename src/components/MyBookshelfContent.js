import {Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography,} from "@mui/material";
import {Container, Stack} from "@mui/system";
import {Link} from "react-router-dom";
import {useUser} from "../context/UserContext";
import {getLikedBooksByUsername} from "../api/CompositeAPI";
import {getReviewsByBookID} from "../api/ReviewsAPI";
import {useEffect, useState} from "react";

const styles = {
  cardGrid: {
    py: 1,
  },
  card: {
    height: "25rem",
    paddingLeft: 0,
    paddingRight: 0,
  },
  cardContent: {
    height: "25%",
    overflow: "auto",
    textOverflow: "ellipsis",
  },
  cardContent_title: {
    overflow: "auto",
    textOverflow: "ellipsis",
  },
  cardContent_content: {
    overflow: "auto",
    textOverflow: "ellipsis",
  },
  cardActions: {
    height: "25%",
    marginLeft: 0.5,
  },
  cardTitle: {
    height: "50%",
  },
  cardMedia: {
    height: "50%",
  },
};

function MediaCard(props) {
  const {name, rating, imageUrl, _id} = props;
  return (
    <Card sx={styles.card}>
      <CardMedia component="img" sx={styles.cardMedia} image={imageUrl}/>
      <CardContent sx={styles.cardContent}>
        <Stack direction="column">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={styles.cardContent_title}
          >
            {name}
          </Typography>
          <Rating value={rating} readOnly></Rating>
        </Stack>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button component={Link} to={"/books/" + _id} size="small">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}

export default function MyBookShelfContent() {
  const {user} = useUser();
  const [bookshelf, setBookshelf] = useState([]);

  const fetchData = async () => {
    let bookshelfData = [];
    getLikedBooksByUsername(user.username).then(async (likedBooks) => {
      const promises = likedBooks.map(async (likedBook) => {
        let avgRating = await getReviewsByBookID(likedBook._id).then((result) => {
          const {average_score} = result;
          return average_score > 0 ? average_score : 0;
        }).catch((e) => {
          console.log(e);
        });
        const entry = {
          title: likedBook.title,
          picture: likedBook.picture,
          rating: avgRating,
          _id: likedBook._id,
        };
        return entry;
      });
      const data = await Promise.all(promises);
      if (data.length) {
        setBookshelf(data);
      }
    }).catch((e) => {
      console.log(e);
    });
  };

  useEffect(() => {
      fetchData();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return (
    <Container sx={styles.cardGrid}>
      <Grid container spacing={4}>
        {bookshelf.map(({title, rating, picture, _id}, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <MediaCard
              name={title}
              rating={rating}
              imageUrl={picture}
              key={idx}
              _id={_id}
            ></MediaCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
