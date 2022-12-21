import {Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography,} from "@mui/material";
import {Container, Stack} from "@mui/system";
import {Link} from "react-router-dom";
import {useUser} from "../context/UserContext";
import {getLikedBooksByUsername} from "../api/CompositeAPI";
import {getReviewsByBookID} from "../api/ReviewsAPI";

const styles = {
  cardGrid: {
    py: 1,
  },
  card: {
    height: "20rem",
    paddingLeft: 0,
    paddingRight: 0,
  },
  cardContent: {
    height: "25%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  cardContent_title: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  cardContent_content: {
    overflow: "hidden",
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
  let data = []

  async function getLikedBooks() {
    return await getLikedBooksByUsername(user.username)
  }

  getLikedBooks().then((likedBooks) => {
    likedBooks.forEach((likedBook) => {
      const entry = {
        title: likedBook.title,
        picture: likedBook.picture,
        _id: likedBook._id
      }
      getReviewsByBookID(likedBook._id).then((result) => {
        const {_, average_score} = result
        entry["rating"] = average_score ? average_score : 0
      }).catch((e) => {
        console.log(e);
      })
      data.push(entry)
    })
  }).catch((e) => {
    console.log(e);
  })

  // useEffect(() => {
  //     data = []
  //     getLikedBooks().then((likedBooks) => {
  //       likedBooks.forEach((likedBook) => {
  //         const entry = {
  //           title: likedBook.title,
  //           picture: likedBook.picture,
  //           _id: likedBook._id
  //         }
  //         getReviewsByBookID(likedBook._id).then((result) => {
  //           const {_, average_score} = result
  //           entry["rating"] = average_score ? average_score : 0
  //         }).catch((e) => {
  //           console.log(e);
  //         })
  //         data.push(entry)
  //       })
  //     }).catch((e) => {
  //       console.log(e);
  //     })
  //   },   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [])

  return (
    <Container sx={styles.cardGrid}>
      <Grid container spacing={4}>
        {data.map(({title, rating, picture, _id}, idx) => (
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
