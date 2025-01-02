import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/userStore";

const Home = () => {
  const { user, logout } = useUserStore((state) => ({
    user: state.user,
    logout: state.logout,
  }));
  //   const user = useUserStore((state) => state.user);
  //   const logout = useUserStore((state) => state.logout);
  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingX: { xs: 2, sm: 4 },
      }}
    >
      <Stack direction="column" spacing={3}>
        <Stack alignItems={"center"} width={"100%"}>
          <Link to="/">
            <img src="/src/assets/image.png" alt="logo" className="logoImage" />
          </Link>
        </Stack>
        <Stack direction="column" spacing={1} alignItems={"center"}>
          <Typography
            variant="h4"
            fontSize={{ xs: 36, sm: 42 }}
            fontWeight={700}
            align="left"
          >
            You&#39;re logged in
          </Typography>
          <Typography variant="body1" color="textSecondary" align="left">
            as {user && <span>{user.email}</span>}
          </Typography>
        </Stack>
        <Divider />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            logout();
          }}
        >
          Log out
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
