// MUI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";

// React Router
import { NavLink } from "react-router-dom";

interface Props {
  open: boolean;
  toggleDrawer: (value: boolean) => void;
}

export default function MobileHeaderMenu(drawerProps: Props) {
  const { open, toggleDrawer } = drawerProps;

  const menuListArr = [
    { listName: "Home", link: "/" },
    { listName: "Destination", link: "/destinations" },
    { listName: "About Us", link: "/about-us" },
    { listName: "Contact Us", link: "/contact-us" },
  ];

  const DrawerList = (
    <Box className="mobile-menu" role="presentation">
      <CloseIcon className="close-icon" onClick={() => toggleDrawer(false)} />
      <div className="menu-list">
        <a href="#">
          <img src="/images/glitter-logo.png" alt="" className="menu-logo" />
        </a>
        <List>
          {menuListArr.map((obj) => (
            <ListItem key={obj.listName} disablePadding>
              <ListItemButton sx={{ "&:hover": { bgcolor: "#ffffff" } }}>
                <NavLink
                  to={obj.link}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {obj.listName}
                </NavLink>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {["Login", "Sign Up"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ "&:hover": { bgcolor: "#ffffff" } }}>
                <a href="#">{text}</a>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <div className="menu-footer">
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
    </Box>
  );

  return (
    <Drawer anchor={"top"} open={open}>
      {DrawerList}
    </Drawer>
  );
}
