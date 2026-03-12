import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import * as Icons from "@mui/icons-material";

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
        <Button
          color="inherit"
          component={Link}
          to="/"
          startIcon={<Icons.Home color="success" fontSize="large" />}
        >
          <span style={{ color: "wheat" }}>Home</span>
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/favorites"
          startIcon={<Icons.Favorite color="secondary" fontSize="large" />}
        >
          <span style={{ color: "wheat" }}>Favorites</span>
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/docs"
          startIcon={<Icons.Api color="warning" fontSize="large" />}
        >
            <span style={{color: "wheat"}}>api-docs</span>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
