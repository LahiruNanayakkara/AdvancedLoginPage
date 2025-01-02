import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { validateEmail, validatePassword } from "../utils/validations";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useUserStore((state) => ({
    login: state.login,
  }));

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (email) => {
    setFormdata({ ...formdata, email });
    const emailValidationError = validateEmail(email);
    if (emailValidationError) {
      return setEmailError(emailValidationError);
    }
    setEmailError(null);
  };

  const handlePasswordChange = (password) => {
    setFormdata({ ...formdata, password });
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      return setPasswordError(passwordValidationError);
    }
    setPasswordError(null);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!formdata.email && !formdata.password) {
      setEmailError("Email is required*");
      setPasswordError("Password is required*");
      return;
    }
    if (!formdata.email) {
      setEmailError("Email is required*");
      return;
    }
    if (!formdata.password) {
      setPasswordError("Password is required*");
      return;
    }
    login(formdata);
    console.log(formdata);
    navigate("/");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="column" spacing={3}>
        <Stack alignItems={"center"} width={"100%"}>
          <Link to="/">
            <img src="/src/assets/image.png" alt="logo" className="logoImage" />
          </Link>
        </Stack>
        <Stack direction="column" spacing={1} alignItems={"center"}>
          <Typography variant="h4" fontWeight={700} align="left">
            Welcome Back
          </Typography>
          <Typography variant="body1" color="textSecondary" align="left">
            Please fill the details below.
          </Typography>
        </Stack>
        <Box component={"form"} onSubmit={(e) => handleLoginSubmit(e)}>
          <FormControl error={!!emailError} sx={{ mb: 2, width: "100%" }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              id="email"
              label="Email"
              placeholder="e.g. something@example.com"
              value={formdata.email}
              onChange={(e) => {
                handleEmailChange(e.target.value);
              }}
            />
            {emailError && <FormHelperText>{emailError}</FormHelperText>}
          </FormControl>
          <FormControl error={!!passwordError} sx={{ mb: 2, width: "100%" }}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              placeholder="Enter Password"
              type={showPassword ? "text" : "password"}
              label="password"
              value={formdata.password}
              onChange={(e) => {
                handlePasswordChange(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {passwordError && <FormHelperText>{passwordError}</FormHelperText>}
          </FormControl>
          <Typography variant="body2" align="right" marginBottom={2}>
            <Link className="custom_link">Forgot Password?</Link>
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ paddingY: 1.95 }}
          >
            Login
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center">
          Don&#39;t have an account?
          <Link className="custom_link" to="/">
            Sign up
          </Link>
        </Typography>
      </Stack>
    </Container>
  );
};

export default Login;