import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { navItems } from "../configs/navItems";

export const NavBar = () => {
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
        {navItems.map((item) => (
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
                    textDecorationColor: `${item.activeTabUnderlineColor}`
                  }
                : {}
            }
          >
            <span style={{ color: "wheat" }}>{item.label}</span>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};
