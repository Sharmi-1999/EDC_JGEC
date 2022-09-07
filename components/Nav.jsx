/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
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
  List,
  CssBaseline,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import {
  Article,
  Collections,
  ConnectWithoutContact,
  Diversity1,
  Event,
  Home,
  Info,
} from "@mui/icons-material";
import { colors } from "../styles/colors";
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
  {
    name: "Sign Up",
    link: "/signup",
    icon: <PersonAddIcon />,
  },
  {
    name: "Log In",
    link: "/login",
    icon: <LoginIcon />,
  },
];
const settings = [
  {
    name: "Profile",
    link: "/profile",
    onc: () => { },
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    onc: () => { },
  },
  {
    name: "Account",
    link: "/account",
    onc: () => { },
  },
  {
    name: "Logout",
    link: "",
    onc: () => {
      signOut({ callbackUrl: "/" });
    },
  },
];
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? colors.primary : null,
    },
  });
}
const Appbar = (props) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleOpenDrawerMenu = () => {
    setDrawerOpen(true);
  };
  const handleCloseDrawerMenu = () => {
    setDrawerOpen(false);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // if(status === "loading") return <></>
  return (
    <React.Fragment >
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          id="navbar"
          position="fixed"
          color="transparent"
          sx={{ padding: "0px !important" }}
          className="animate__animated animate__fadeInDown"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                <Link href="/">
                  <img
                    src="https://i.imgur.com/4YIP5wS.png"
                    width="60"
                    height="60"
                    alt="logo"
                  />
                </Link>
              </IconButton>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenDrawerMenu}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: "#fff" }} />
                </IconButton>
                <Drawer open={drawerOpen} onClose={handleCloseDrawerMenu}>
                  <List>
                    {pages.map((page) => (
                      <Link href={page.link} key={page.name}>
                        <ListItem
                          disablePadding
                          onClick={handleCloseDrawerMenu}
                        >
                          <ListItemButton>
                            <ListItemIcon sx={{ color: "#800000" }}>
                              {page.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={page.name}
                              sx={{ color: "#800000" }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Drawer>
              </Box>
              <IconButton
                sx={{ display: { xs: "block", md: "none" } }}
                href="/"
              >
                <Link href="/">
                  <img
                    src="https://i.imgur.com/4YIP5wS.png"
                    width="60"
                    height="60"
                    alt="logo"
                  />
                </Link>
              </IconButton>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  margin: "auto",
                  width: "fit-content",
                }}
              >
                {pages.map((page) =>
                  page.name === "Sign Up" || page.name === "Log In" ? (
                    <></>
                  ) : (
                    <Link href={page.link}>
                      <Button
                        key={page.name}
                        sx={{
                          mx: 2,
                          color: "white",
                          display: "block",
                          fontWeight: "bold",
                          backgroundColor:
                            router.pathname === page.link
                              ? colors.secondary
                              : null,
                          ":hover": {
                            backgroundColor:
                              router.pathname === page.link
                                ? `${colors.danger}`
                                : `${colors.darkGrey}`,
                          },
                        }}
                      >
                        {page.name}
                      </Button>
                    </Link>
                  )
                )}
              </Box>

              {session && status === "authenticated" && (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    marginThreshold={0}
                    sx={{ mt: "10px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "bottom",
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
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting.name}
                        onClick={handleCloseUserMenu}
                      >
                        <Link href={setting.link}>
                          <Typography
                            textAlign="center"
                            onClick={setting.onc()}
                          >
                            {setting.name}
                          </Typography>
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}
              {!session && status === "unauthenticated" && (
                <Box sx={{ flexGrow: 0 }}>
                  {/* <Link href={"/signup"}>
                    <Button
                      sx={{ ml: "7px", display: { xs: "none", md: "inline" } }}
                      variant="outlined"
                      startIcon={<PersonAddIcon />}
                    >
                      Sign Up
                    </Button>
                  </Link> */}
                  <Link href={"/login"}>
                    <Button
                      sx={{
                        // ml: "7px",
                        display: { xs: "none", md: "inline" },
                        color: colors.primary,
                      }}
                      variant="contained"
                      color="inherit"
                      startIcon={<LoginIcon />}
                    >
                      Log In
                    </Button>
                  </Link>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};
export default Appbar;
