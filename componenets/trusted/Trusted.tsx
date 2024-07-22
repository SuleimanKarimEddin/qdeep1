import React from "react";
import TrustedCart from "./TrustedCart";

const data1 = [
  {
    url: "/images/trusted/1.png",
    title: "Innopolis University",
    description:
      "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
  },
  {
    url: "/images/trusted/2.png",
    title: "Inventum.ai",
    description:
      "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
  },
  {
    url: "/images/trusted/3.png",
    title: "Global1A1",
    description:
      "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
  },
];
const data2 = [
  {
    url: "/images/platforms/1.png",
    title: "Checking Accounts",
    description:
    "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
  },
  {
    url: "/images/platforms/2.png",
    title: "Savings Accounts",
    description:
    "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
  },
  {
    url: "/images/platforms/3.png",
    title: "Loans and Mortgages",
    description:
    "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
  },
];
export default function Trusted({is_trusted=true}:{is_trusted?:boolean}) {
  const data = is_trusted ? data1 : data2
  return (
    <div className="trusted__holder">
      {data.map((item, idx) => (
        <div key={item.title} className="trusted__cart-holder">
          {" "}
          <TrustedCart {...item} is_trusted={is_trusted}></TrustedCart>
          {idx !== data.length - 1 && <div className="trusted__saperator" />}
        </div>
      ))}
    </div>
  );
}
