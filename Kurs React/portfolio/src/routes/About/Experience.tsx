import { List } from "@mui/material";
import ExperienceTile from "../../components/ExperienceTile/ExperienceTile";

const experiences = [
    {
        title: "FitHouse",
        description: [
            "Contact with customers.",
            "Contatcts with other companies, supplying the company with resources.",
            "Making a class schedule."
        ],
        time_from: "2022 June",
        time_to: "2022 September",
    },
    {
        title: "Nocos solutions",
        description: [
            "Creating the app for learning programming for children and teenagers.",
            "Creating our own borad (like jamboard or miro, but better) ",
        ],
        time_from: "2023 March",
        time_to: "Present",
    },
];



export default function Education(){
    return(
        <List sx={{width: "50%",}}>
            {experiences.map((experience) => (
                <ExperienceTile
                    title={experience.title}
                    description={experience.description}
                    time_from={experience.time_from}
                    time_to={experience.time_to}
                />
            ))}
        </List>
    );
}