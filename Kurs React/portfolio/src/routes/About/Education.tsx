import { List } from "@mui/material";
import SchoolTile from "../../components/SchoolTile/SchoolTile";

const schools = [
    {
        title: "University of Wrocław",
        description: "Computer Science",
        time_from: "2022 Oct",
        time_to: "Present",
    },
    {
        title: "VI High School in Bydgoszcz",
        description: "Focused on mathematics, physics and computer science.",
        time_from: "2019",
        time_to: "2022",
    },
];



export default function Education(){
    return(
        <List sx={{width: "50%",}}>
            {schools.map((school) => (
                <SchoolTile
                    title={school.title}
                    description={school.description}
                    time_from={school.time_from}
                    time_to={school.time_to}
                />
            ))}
        </List>
    );
}