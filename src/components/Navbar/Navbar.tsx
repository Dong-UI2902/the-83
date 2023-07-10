import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Link from "../Link/Link";
import Layout from "../Layout/Layout";
import { useLocation } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const drawerWidth = 270;

const navItems = [
  {
    name: "Trang chủ",
    href: "/",
  },
  {
    name: "Giới thiệu",
    href: "/gioi-thieu",
  },
  {
    name: "Dịch vụ",
    href: "/dich-vu",
  },
  {
    name: "Kiến thức",
    href: "/kien-thuc",
  },
  {
    name: "Liên hệ",
    href: "/lien-he",
  },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "200px",
  },
  color: "var(--dark-color)",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  fontSize: "14px",
  fontFamily: "inherit",
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  color: "var(--dark-color)",
  padding: 0,
  width: "100%",
  "&.active": {
    borderBottom: "4px solid rgb(178, 73, 248)",
  },
}));

const IconStyle = {
  alignItems: "center",
  maxWidth: { xs: "35px", sm: "50px" },
  margin: "0 5px",
  color: "#889096",
  "&:hover": {
    color: "var(--dark-color)",
  },
  display: {
    xs: "none",
    md: "flex",
  },
};

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const location = useLocation();

  const checkRoute = (path: string) => {
    return location.pathname === path;
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: "var(--light-color)" }}>
          <Layout>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  mr: 2,
                  display: {
                    xs: "block",
                    sm: "none",
                    color: "var(--dark-color)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  maxWidth: { xs: "35px", sm: "50px" },
                  marginRight: "auto",
                }}
              >
                <img width={"100%"} src="/assets/img/pink-no-desc.png" />
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {navItems.map((item, index) => {
                  if (item.href === "/dich-vu") {
                    return (
                      <label key={item.name}>
                        <Button
                          id="basic-button"
                          aria-controls={openMenu ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={openMenu ? "true" : undefined}
                          onClick={handleClick}
                          sx={{
                            fontWeight: "500",
                            fontSize: "1.2rem",
                            color: "var(--dark-color)",
                            "&.active": {
                              borderBottom: "4px solid rgb(178, 73, 248)",
                              fontWeight: "700",
                            },
                            textTransform: "unset",
                            paddingBottom: "10px",
                          }}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          {item.name}
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={openMenu}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <LinkStyle
                              href={"dich-vu-ads"}
                              className={checkRoute(item.href) ? "active" : ""}
                            >
                              Dịch vụ quảng cáo Online
                            </LinkStyle>
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>
                            <LinkStyle
                              href={"dich-vu-webdesign"}
                              className={checkRoute(item.href) ? "active" : ""}
                            >
                              Thiết kế, chăm sóc website, landing page
                            </LinkStyle>
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>
                            <LinkStyle
                              href={"dich-vu-editor"}
                              className={checkRoute(item.href) ? "active" : ""}
                            >
                              Thiết kế hình ảnh, video
                            </LinkStyle>
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>
                            <LinkStyle
                              href={"dich-vu-marketing-online"}
                              className={checkRoute(item.href) ? "active" : ""}
                            >
                              Tư vấn chiến lược Marketing Online
                            </LinkStyle>
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>
                            <LinkStyle
                              href={"dich-vu-nhan-dien-thuong-hieu"}
                              className={checkRoute(item.href) ? "active" : ""}
                            >
                              Xây dựng bộ nhận diện thương hiệu
                            </LinkStyle>
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>
                            <LinkStyle
                              href={"dich-vu-tim-nguon-hang"}
                              className={checkRoute(item.href) ? "active" : ""}
                            >
                              Tìm nguồn hàng phát triển hệ thống kinh doanh
                            </LinkStyle>
                          </MenuItem>
                        </Menu>
                      </label>
                    );
                  }

                  return (
                    <Link
                      key={index}
                      sx={{
                        fontWeight: "500",
                        fontSize: "1.2rem",
                        color: "var(--dark-color)",
                        "&.active": {
                          borderBottom: "4px solid rgb(178, 73, 248)",
                          fontWeight: "700",
                        },
                      }}
                      href={item.href}
                      className={checkRoute(item.href) ? "active" : ""}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={IconStyle}
                >
                  <FacebookIcon />
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={IconStyle}
                >
                  <InstagramIcon />
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={IconStyle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-tiktok"
                    viewBox="0 0 18 16"
                    style={{
                      border: "2px solid #889096",
                      borderRadius: "5px",
                      padding: "2px",
                    }}
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"></path>
                  </svg>
                </Typography>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
            </Toolbar>
          </Layout>
        </AppBar>
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
