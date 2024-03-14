import React from "react";

interface PhotoProps {
  src: string;
}

export default function Photo({ src }: PhotoProps) {
  return (
    <div className="photo">
      <img src={src} alt="Profile" className="profilePhoto" />
      <img
        src={"https://demur.pl/cat_img_big/rozowa-wrozka-milosci-405.jpg"}
        alt="Profile"
        className="profilePhotoWitch"
      />
    </div>
  );
}
