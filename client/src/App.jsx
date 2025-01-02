import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import ProtectedRoute from "./components/protectedRoute";
import Header from "./components/header";
import { Alert, Snackbar } from "@mui/material";
import { useSnackbarStore } from "./store/snackbarStore";

function App() {
  const { open, severity, message, closeSnackbar } = useSnackbarStore(
    (state) => ({
      open: state.open,
      severity: state.severity,
      message: state.message,
      closeSnackbar: state.closeSnackbar,
    })
  );
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route index path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {open && (
          <Alert
            onClose={closeSnackbar}
            severity={severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        )}
      </Snackbar>
    </BrowserRouter>
  );
}

export default App;
