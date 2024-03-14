import React from "react";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          {skill}
        </div>
      ))}
    </div>
  );
}
