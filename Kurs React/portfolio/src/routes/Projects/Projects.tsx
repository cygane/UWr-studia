import ttt from '../../assets/ttt.png'
import pygame from '../../assets/pygame_logo.png'
import fajrant from '../../assets/fajrant.png'
import nocos from '../../assets/nocos.jpeg'
import { List } from "@mui/material";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import './styles.css';

const projects = [
    {
        img: fajrant,
        title: "FajrantInator.pl",
        description: [
            "Integration with MongoDB database",
            "Login panel with password hashing",
            "Multiple views for users",
            "Administrator panel",
            "User verification through a quick test"
        ],
        href:"https://fi.nocos.pl",
        code:"https://github.com/PatrykFlama/FajrantInator.pl",
        tech: "JavaScript, Node.js + Express, MongoDB, HTML, CSS",
    },
    {
        img: pygame,
        title: "Icy Tower",
        description: [
            "Mechanics based on the original Icy Tower from 2001",
            "Pixel art-style graphics",
            "Original soundtrack",
            "Game resolution and refresh rate adjusted to 2023 standards",
        ],
        href:"",
        code:"https://github.com/II-UWr-22/projekt-PWI-zesp--6",
        tech:"Python with the Pygame library",
    },
    {
        img: ttt,
        title: "Tic Tac Toe",
        description: [
            "Pixel art-style graphics",
            "Saving user data to a text file",
            "Ability to play with a bot",
            "Loading bar animation",
        ],
        href:"",
        code:"https://github.com/cygane/UWr-studia/tree/main/Programowanie%20Obiektowe/projekt",
        tech:"Python with the Pygame library",
    },
    {
        img: nocos,
        title: "Nocos Solutions",
        description: [
            "App for learning programming for children and teenagers",
            "Live board",
        ],
        href:"",
        code:"",
        tech:"Figma, VSCode, Github, Stackoverflow",
    },
]

export default function Projects() {
    return(
        <div className='container-tail'>
        <List sx={{width: "50%",}}>
            {projects.map((project) => (
                <ProjectTile
                    img={project.img}
                    title={project.title}
                    description={project.description}
                    href={project.href}
                    code={project.code}
                    tech={project.tech}
                />
            ))}
        </List>
        </div>
    );
}