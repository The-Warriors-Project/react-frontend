import { forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSnackbar } from "../context/SnackbarContext";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const { snackbarStates, closeSuccessMessage, closeErrorMessage } =
    useSnackbar();

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    closeSuccessMessage();
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    closeErrorMessage();
  };

  return (
    <>
      <Snackbar
        open={snackbarStates.success.open}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarStates.success.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={snackbarStates.error.open}
        autoHideDuration={3000}
        onClose={handleCloseError}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackbarStates.error.message}
        </Alert>
      </Snackbar>
    </>
  );
}
