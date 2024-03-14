import React from "react";

interface InfoProps {
  name: string;
  jobTitle: string;
  company: string;
  email: string;
  phone: string;
  website: string;
}

export default function Info({
  name,
  jobTitle,
  company,
  email,
  phone,
  website,
}: InfoProps) {
  return (
    <div className="info">
      <h2>{name}</h2>
      <p>{jobTitle}</p>
      <p>{company}</p>
      <ul className="infoList">
        <li>
          <b>Email: </b> {email}
        </li>
        <li>
          <b>Phone: </b> {phone}
        </li>
        <li>
          <b>Website: </b>
          {website}
        </li>
      </ul>
    </div>
  );
}
