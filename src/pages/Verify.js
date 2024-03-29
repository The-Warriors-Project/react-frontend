import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "../context/SnackbarContext";
import { verify } from "../api/UsersAPI";

export default function Verify() {
  const { openSuccessMessage, openErrorMessage } = useSnackbar();
  const [formValues, setFormValues] = useState({ username: "", verificationCode: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // execute once on page load. If we're coming from '/signup', set username from prev page state
  useEffect(() => {
      if (location.state && location.state.username) {
        setFormValues({ ...formValues, username: location.state.username })
      }
    },   // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    await verify(
      formValues.username, formValues.verificationCode,
      (successMsg) => {
        openSuccessMessage(successMsg + " Redirecting shortly...");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      },
      openErrorMessage
    );
  };


  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5" align="center">
          Welcome to Reader Hub
        </Typography>
        <Typography component="h1" variant="h5" align="center">
          Please verify your account.
        </Typography>
        <br></br>
        <Typography component="h1" variant="subtitle1" align="center">
          To verify your account, enter your username and verification code that was emailed to you below.
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                onChange={handleChange}
                value={formValues.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="verificationCode"
                label="Verification Code"
                name="verificationCode"
                value={formValues.verificationCode}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Verify
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
