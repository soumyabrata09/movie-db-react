import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

export const MenuListItem = ({icon: Icon, text, iconColor, fontSize = "small"}) => {
    return (
        <ListItem>
            <ListItemIcon>
                <Icon color={iconColor} fontSize={fontSize}></Icon>
            </ListItemIcon>
            <ListItemText primary={text}></ListItemText>
        </ListItem>
    );
};