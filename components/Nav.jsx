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
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText


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
import { color } from "@mui/system";
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
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen,setDrawerOpen] =React.useState(false)
  const handleOpenDrawerMenu= ()=>{
    setDrawerOpen(true);
  };
  const handleCloseDrawerMenu= ()=>{
    setDrawerOpen(false)
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{backgroundColor: "#ffffffdd",padding:"0px !important"}} className="animate__animated animate__fadeInDown">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href="/">
              <img
                src="https://i.imgur.com/4YIP5wS.png"
                width="50"
                height="50"
                alt="logo"
              />
            </Link>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#800000',
              textDecoration: 'none',
              fontFamily :"Cloister black"
            }}
          ><Link href = "/"> 
            EDC
          </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenDrawerMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:"#800000"}} />
            </IconButton>
            <Drawer
              open={drawerOpen}
              onClose={handleCloseDrawerMenu}
            >
              <List>
                {pages.map((page)=>
                (<Link href={page.link} key={page.name}>
                  <ListItem disablePadding onClick={handleCloseDrawerMenu}>
                  <ListItemButton>
                    <ListItemIcon sx={{color:"#800000"}}>
                      {page.icon}
                    </ListItemIcon>
                    <ListItemText primary={page.name}  sx={{color:"#800000"}}/>
                  </ListItemButton>
                </ListItem>
              </Link>))}
              </List>
            </Drawer>
          </Box>
          <IconButton sx={{ display: { xs: "block", md: "none" } }} href="/">
            <Link href="/">
              <img
                src="https://i.imgur.com/4YIP5wS.png"
                width="50"
                height="50"
                alt="logo"
              />
            </Link>
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#800000',
              textDecoration: 'none',
              fontFamily:"Cloister black"
            }}
          ><Link href="/">
            EDC
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: '#800000', display: 'block', fontWeight:"bold",':hover':{color:'#8b0000',textShadow:'0px 0px 3px #cf1020'} }}
                >
                <Link href={page.link}>
                {page.name}
                </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              marginThreshold={0}
              sx={{ mt: '10px'}} 
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
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
