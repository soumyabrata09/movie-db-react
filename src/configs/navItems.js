import * as Icons from "@mui/icons-material";
import { IconColors } from "./iconColors";

export const navItems = [
    {
        index: 1,
        icon: Icons.Home,
        iconColor: IconColors.SUCCESS,
        activeTabUnderlineColor: "green",
        label: "Home",
        path: "/"
    },
    {
        index: 2,
        icon: Icons.Favorite,
        iconColor: IconColors.SECONDARY,
        activeTabUnderlineColor: "violet",
        label: "Favorite",
        path: "/favorites"
    },
    {
        index: 3,
        icon: Icons.Api, 
        iconColor: IconColors.WARNING,
        activeTabUnderlineColor: "orange",
        label: "Api-Docs",
        path: "/docs"
    }
];