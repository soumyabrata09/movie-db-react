import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";
import { Menu, MenuItem } from "@mui/material";
import { menuListItems } from "../configs/menuListItems";
import { MenuListItem } from "./MenuListItem";
import { NavMenuItem } from "../configs/navMenuItem";
import { AppRoutes } from "../configs/appRoutes";

export const NavMenu = ({ anchorEl, open, onMouseLeave }) => {
  const navigate = useNavigate();
  const { loadPopularMovies, loadTopMovies } = useMovieContext();

  const handleMenuClick = (item) => {
    onMouseLeave();
    if (item.text === NavMenuItem.POPULAR) {
        loadPopularMovies();
    }
    if (item.text === NavMenuItem.TOP_MOVIES) {
        loadTopMovies();
    }
    navigate(AppRoutes.HOMEPAGE);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onMouseLeave}
      slotProps={{
        list: {
          onMouseLeave: onMouseLeave,
        },
      }}
    >
      {Array.isArray(menuListItems) &&
        menuListItems.map((item) => (
          <MenuItem key={item.id} onClick={() => handleMenuClick(item)}>
            <MenuListItem
              icon={item.icon}
              iconColor={item.iconColor}
              text={item.text}
            ></MenuListItem>
          </MenuItem>
        ))}
    </Menu>
  );
};
