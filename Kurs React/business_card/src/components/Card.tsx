import React from "react";
import Photo from "./Photo";
import Info from "./Info";
import Skills from "./Skills";
import About from "./About";

export default function Card() {
  const skills = [
    "JavaScript",
    "React(?)",
    "TypeScript",
    "HTML",
    "CSS",
    "Node.js",
  ];
  return (
    <div className="card">
      <Photo src="https://czaskultury.pl/wp-content/uploads/2012/11/cygan.jpg" />
      <Info
        name="Julia Cygan"
        jobTitle="Student"
        company="UWr"
        email="juliacygan3758@gmail.com"
        phone="850-193-877"
        website="www.juliacygan.com"
      />
      <About text="I'm a just a student at UWr, who tries to learn React." />
      <Skills skills={skills} />
    </div>
  );
}
