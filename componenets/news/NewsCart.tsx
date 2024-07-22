import Image from "next/image";
import React from "react";
function getDirectImageUrl(url: string): string {
  const driveFileIdMatch = url.match(/\/d\/(.*?)\//);
  if (driveFileIdMatch) {
    const fileId = driveFileIdMatch[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  return url;
}
export default function NewsCart({ body, date, location, titile, url }: INews) {
  return (
    <div className="news__cart">
      <Image
        className="news__image"
        src={getDirectImageUrl(url)}
        width={100}
        height={100}
        alt="logo"
      ></Image>
      <h3>{titile}</h3>
      <div className="news__date">
        {" "}
        <p>Location: {location}</p> <p>Date: {date}</p>
      </div>

      <p className="news__body">{body}</p>
    </div>
  );
}
