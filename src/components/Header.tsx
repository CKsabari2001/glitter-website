import React from "react";

// React Router
import { Link } from "react-router-dom";

// MUI
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import { CustomAppBar } from "./styled/Styled";
import MobileHeaderMenu from "./MobileHeaderMenu";
function Header() {
  const isNavOpen = useMediaQuery("(max-width:899px)");

  const [open, setOpen] = React.useState(false);

  function toggleDrawer(value: boolean) {
    setOpen(value);
  }

  return (
    <>
      <div className={`nav-top ${isNavOpen ? "nav-close" : "nav-open"}`}>
        <Box>
          <Stack direction="row" spacing={2} className="social-icons">
            <a href="#">
              <span>
                <InstagramIcon />
              </span>
            </a>
            <a href="#">
              <span>
                <FacebookOutlinedIcon />
              </span>
            </a>
            <a href="#">
              <span>
                <YouTubeIcon />
              </span>
            </a>
            <a href="#">
              <span>
                <TwitterIcon />
              </span>
            </a>
          </Stack>
        </Box>
      </div>
      <div className="nav-bar">
        <Box sx={{ flexGrow: 1 }}>
          <CustomAppBar position="static">
            <Toolbar
              sx={{
                justifyContent: isNavOpen ? "space-between" : "center",
                alignItems: "center",
                padding: "5px 10px",
              }}
            >
              <a href="#" style={{ display: isNavOpen ? "block" : "none" }}>
                <img
                  src="/images/glitter-logo.png"
                  alt=""
                  className="menu-logo"
                />
              </a>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: isNavOpen ? "block" : "none" }}
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              <div className="pc-menu">
                <a href="#">
                  <img
                    src="/images/glitter-logo.png"
                    alt=""
                    className="menu-logo"
                  />
                </a>
                <Stack direction="row" spacing={2} className="menu-list">
                  <Link to="/">Home</Link>
                  <Link to="/destinations">Destinations</Link>
                  <Link to="/about-us">About Us</Link>
                  <Link to="/contact-us">Contact Us</Link>
                </Stack>
                <Stack direction="row" spacing={2} className="menu-list">
                  <a href="">Login</a>
                  <a href="">Sign up</a>
                </Stack>
              </div>
            </Toolbar>
          </CustomAppBar>
          <MobileHeaderMenu toggleDrawer={toggleDrawer} open={open} />
        </Box>
      </div>
    </>
  );
}

export default Header;
