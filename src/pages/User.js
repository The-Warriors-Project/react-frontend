import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export function User() {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }

  return (
    <>
      <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
        Username
      </Typography>
      <Typography variant="h6" align="left" color="textSecondary" gutterBottom>
        {user && user.username}
      </Typography>
    </>
  );
}
