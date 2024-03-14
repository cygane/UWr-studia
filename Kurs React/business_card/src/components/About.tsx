import React from "react";

interface AboutProps {
  text: string;
}

export default function About({ text }: AboutProps) {
  return (
    <div className="about">
      <h3>About Me</h3>
      <p>{text}</p>
    </div>
  );
}

