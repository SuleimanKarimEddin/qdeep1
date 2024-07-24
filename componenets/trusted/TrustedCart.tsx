import Image from "next/image";
import React from "react";

interface TrustedProps {
  url: string;
  title: string;
  description: string;
  is_trusted?: boolean;
}
export default function TrustedCart({ url, title, description,is_trusted }: TrustedProps) {
  return (
    <div className="trusted__cart">
      <Image unoptimized src={url} alt={title} width={100} height={100} className={is_trusted ? "trusted__cart-image" : "trusted__cart-image2"}></Image>
      <div className="trusted__title">{title}</div>
      <div className="trusted__description">{description}</div>
    </div>
  );
}
