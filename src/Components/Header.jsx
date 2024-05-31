import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import React, { useState } from "react";
import AboutDialog from "./AboutDialog";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAboutDialogClose = () => {
    setIsAboutOpen(false);
  };
  const handleAboutDialogOpen = () => {
    setIsAboutOpen(true);
  };

  const jumpApp = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Small View */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem key={"App"} onClick={jumpApp}>
                  <Typography textAlign="center">Application</Typography>
                </MenuItem>
                <MenuItem key={"About"} onClick={handleAboutDialogOpen}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem key={"Proj"} onClick={() => {}}>
                  <Typography textAlign="center">Project</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WorkPom
            </Typography>

            {/* Expand View */}
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WorkPom
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key="App"
                sx={{ my: 2, color: "white", display: "block" }}
                href="/"
              >
                Application
              </Button>
              <Button
                key="About"
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={handleAboutDialogOpen}
              >
                About
              </Button>
              <Button
                key="Proj"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Project
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AboutDialog open={isAboutOpen} handleClose={handleAboutDialogClose} />
    </>
  );
}
export default Header;
