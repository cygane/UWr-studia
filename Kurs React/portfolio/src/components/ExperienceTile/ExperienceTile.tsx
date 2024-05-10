import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";

interface IExperienceTile {
    title: string;
    description: string[];
    time_from: string;
    time_to: string;
}

export default function SchoolTile({ title, description, time_from, time_to }: IExperienceTile) {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={title}
                    secondary={
                        <>
                        {description.map((item) =>(
                            <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {item}
                        </Typography>
                        ))}
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

