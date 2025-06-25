import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router";

const navItems = [
  {
    text: "Home",
    goTo: "/",
  },
  {
    text: "Signup",
    goTo: "/signup",
  },
];
function AdminLayout({ children }) {
  const nav = useNavigate();
  const handleNavigate = (goTo) => {
    console.log(goTo);
    nav(goTo);
  };

  return (
    <div className="max-w-[80vw] my-5">
      <AppBar>
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            {navItems.map((item, index) => (
              <Button
                onClick={() => handleNavigate(item.goTo)}
                key={index}
                sx={{ color: "#fff" }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box>{children}</Box>
    </div>
  );
}

export default AdminLayout;
