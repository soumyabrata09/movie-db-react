import { IconColors } from "./iconColors";
import * as Icons from "@mui/icons-material";
import { NavMenuItem } from "./navMenuItem";

export const menuListItems = [
    {
        id: 1,
        text: NavMenuItem.POPULAR,
        iconColor: IconColors.SUCCESS,
        icon: Icons.Movie
    },
    {
        id: 2,
        text: NavMenuItem.TOP_MOVIES,
        iconColor: IconColors.SECONDARY,
        icon: Icons.Movie
    }
];