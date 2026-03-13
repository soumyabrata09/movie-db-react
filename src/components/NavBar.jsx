import { Link, NavLink, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import * as Icons from "@mui/icons-material";
import {
  AppBar,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { navItems } from "../configs/navItems";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { IconColors } from "../configs/iconColors";
import { MenuListItem } from "./MenuListItem";
import { NavMenu } from "./NavMenu";

export const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElement, setAnchorElement] = useState(null);
  const { loadTopMovies, loadPopularMovies } = useMovieContext();
  const open = Boolean(anchorElement);
  const handleMouseEnterEvent = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleMouseLeaveEvent = () => {
    setAnchorElement(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className="navbar">
        {/* Brand */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className="navbar-brand"
        >
          Movie App
        </Typography>

        {/* Navigation buttons */}
        <Tooltip title="open swagger docs"></Tooltip>
        {navItems.map((item) => {
          const isHomePage = item.label === "Home";
          const isApiDoc = item.label === "Api-Docs";
          const navBtn = (
            <Button
              key={item.index}
              color="inherit"
              className="nav-link"
              component={NavLink}
              to={item.path}
              startIcon={<item.icon color={item.iconColor} fontSize="large" />}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecorationColor: `${item.activeTabUnderlineColor}`,
                    }
                  : {}
              }
              endIcon={
                isHomePage &&
                (open ? <KeyboardArrowUp /> : <KeyboardArrowDown />)
              }
              onMouseEnter={isHomePage ? handleMouseEnterEvent : undefined}
            >
              <span style={{ color: "wheat" }}>{item.label}</span>
            </Button>
          );

          const menu = (
            <NavMenu
              anchorEl={anchorElement}
              open={open}
              onMouseLeave={handleMouseLeaveEvent}
            ></NavMenu>
          );

          // Wrap Api-Docs with ToolTop
          if (isApiDoc) {
            return (
              <Tooltip key={item.index} title="Open Swagger Docs">
                {navBtn}
              </Tooltip>
            );
          }

          // Wrap Home in a Div with Menu
          if (isHomePage) {
            return (
              <div key={item.index} onMouseLeave={handleMouseLeaveEvent}>
                {navBtn}
                {menu}
              </div>
            );
          }

          //Default: only navBtn render
          return navBtn;
        })}
      </Toolbar>
    </AppBar>
  );
};
