import React from "react";
import { ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

interface ISchoolTile {
    title: string;
    description: string;
    time_from: string;
    time_to: string;
}

export default function SchoolTile({ title, description, time_from, time_to }: ISchoolTile) {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText
                    primary={title}
                    secondary={
                        <>
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {description}
                            </Typography>
                            {" — "}
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.secondary"
                            >
                                {time_from} - {time_to}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
        </>
    );
};

