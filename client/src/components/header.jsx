import { DarkModeOutlined } from "@mui/icons-material";
import { AppBar, Stack, ToggleButton } from "@mui/material";
import { useThemeStore } from "../store/themeStore";

const Header = () => {
  const { themeMode, setThemeMode } = useThemeStore((state) => ({
    themeMode: state.themeMode,
    setThemeMode: state.setThemeMode,
  }));

  return (
    <AppBar
      position="fixed"
      variant="outline"
      sx={{ padding: 1, border: 0, backgroundColor: "transparent" }}
    >
      <Stack direction="row" justifyContent="flex-end">
        <Stack direction="row" alignItems="center" spacing={0}>
          <ToggleButton
            color="primary"
            value="check"
            selected={themeMode === "dark"}
            sx={{ borderRadius: 50 }}
            onClick={() => {
              setThemeMode(themeMode === "dark" ? "light" : "dark");
            }}
          >
            <DarkModeOutlined />
          </ToggleButton>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Header;
