import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
