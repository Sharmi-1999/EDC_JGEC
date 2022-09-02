/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  Drawer,
  Typography,
  Menu,
  MenuItem,
  Toolbar,
  AppBar,
  Box,
  Container,
  Avatar,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Article,
  Collections,
  ConnectWithoutContact,
  Diversity1,
  Event,
  Home,
  Info,
} from "@mui/icons-material";
const pages = [
  {
    name: "Home",
    link: "/",
    icon: <Home />,
  },
  {
    name: "About",
    link: "/about",
    icon: <Info />,
  },
  {
    name: "Blogs",
    link: "/blogs",
    icon: <Article />,
  },
  {
    name: "Events",
    link: "/events",
    icon: <Event />,
  },
  {
    name: "Gallery",
    link: "/gallery",
    icon: <Collections />,
  },
  {
    name: "Team",
    link: "/team",
    icon: <Diversity1 />,
  },
  {
    name: "Contact Us",
    link: "/contact",
    icon: <ConnectWithoutContact />,
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Appbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffffdd",
      }}
      className="animate__animated animate__fadeInDown animate__slow"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
            <img
              src="https://i.imgur.com/4YIP5wS.png"
              width="50"
              height="50"
              alt="logo"
            />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box
                sx={{
                  width: 250,
                  height: "100%",
                }}
              >
                {pages.map((page, index) => (
                  <Link href={page.link} key={index}>
                    <MenuItem
                      sx={{
                        display: "flex",
                        margin: "0.5rem",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "maroon",
                      }}
                      key={index}
                      onClick={() => setDrawerOpen(false)}
                    >
                      {page.icon}
                      <Typography
                        fontFamily="Times New Roman"
                        variant="body1"
                        sx={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        {page.name}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Box>
              <img
                width="100px"
                style={{ margin: "auto" }}
                src="https://i.imgur.com/4YIP5wS.png"
                alt="logo"
              />
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link
                key={page}
                href={page.link}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "maroon", display: "block" }}
              >
                <NavBtn>{page.name}</NavBtn>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index}>
                  <Button key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appbar;
const NavBtn = styled.div`
  margin: 1rem;
  cursor: pointer;
  color: maroon;
  border: 0px dotted #800000;
  border-radius: 5px;
  padding: 0.5rem;
  &:hover {
    box-shadow: 0px 0px 3px #800000aa;
  }
`;
