"use client";
import NewsHolder from "@/componenets/news/NewsHolder";
import Trusted from "@/componenets/trusted/Trusted";
import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <>
      <div className="home">
        <h1 className="home-page">
          The quantum leap to solving the unsolvable{" "}
          <div className="word-half">
            - making the impossible, <span className="word">possible</span>.
          </div>
        </h1>
        <Image
          alt="logo"
          src="/images/header_body.png"
          width={100}
          height={100}
          className="home__header"
        ></Image>
        <Image
          src="/images/upEffect.svg"
          width={100}
          height={100}
          alt="logo"
          className="home__footer"
        ></Image>
      </div>
      <div className="trusted">
        <Image
          src="/images/downEffect.svg"
          width={100}
          height={100}
          alt="logo"
          className="trusted__footer"
        ></Image>
        <h2 className="header">
          Trusted <span className="word">by</span>
        </h2>
        <Trusted></Trusted>
      </div>
      <div className="trusted">
        <h2 className="header2">
          Our <span className="word2">Platforms</span>
        </h2>
        <h3>
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and aspirations
        </h3>
        <Trusted is_trusted={false}></Trusted>
      </div>
      <div className="laptop">
        <div className="laptop__first">
          <button className="laptop__first-button">Coming Soon...</button>
          <Image
            src="/images/laptop/1.svg"
            width={100}
            height={100}
            alt="logo"
            className="laptop__first-image"
          ></Image>
          <Image
            src="/images/laptop/first.svg"
            width={100}
            height={100}
            alt="logo"
            className="laptop__first-inner1"
          ></Image>
        </div>
        <div className="laptop__second">
          <button className="laptop__second-button">See Our Beta Platform</button>
          <Image
            src="/images/laptop/2.svg"
            width={100}
            height={100}
            alt="logo"
            className="laptop__second-image"
          ></Image>
          <Image
            src="/images/laptop/second.svg"
            width={100}
            height={100}
            alt="logo"
            className="laptop__second-inner"
          ></Image>
        </div>
      </div>
      <div className="case">
        <h2 className="case__header">Our Featured Case Studies</h2>
        <h3 className="case__description">
          We envision being a leading force in the industry, driven by
          innovation, integrity, and inclusivity, creating a brighter financial
          future for individuals and businesses while maintaining a strong
          commitment to customer satisfaction and community development
        </h3>
        <div className="case__first">
          <Image
            src="/images/case/1.svg"
            width={100}
            height={100}
            alt="logo"
            className="case__first-image"
          ></Image>
          <div className="case__first-body">
            <h2 className="case__first-body-header">
              Quantum Congestion-Focused Traffic Optimization (Q-CFTO)
            </h2>
            <h3 className="case__first-body-subheader">
              Building on Volkswagen and D-Wave's 2017 work, our Quantum
              Congestion-Focused Traffic Optimization (Q-CFTO) breaks down large
              traffic optimization problems into manageable subproblems. Using
              D-Wave's Advantage Quantum Processing Unit with "Pegasus"
              topology, we achieved faster, more effective traffic flow
              optimization.
            </h3>
          </div>
        </div>
        <div className="case__first">
          <div className="case__first-body">
            <h2 className="case__first-body-header">
            Passenger Drone Infrastructure Optimization (PDI-OP)
            </h2>
            <h3 className="case__first-body-subheader">This case study addresses the optimization of urban passenger drone infrastructure. It focuses on the Passenger Drone Infrastructure Optimization Problem (PDI-OP), an NP-hard Facility Location Problem. Utilizing Quantum Annealing (QA), we achieved superior performance in determining spatial requirements for landing pads, vertiports, and vertistops. Our results demonstrate QA's potential to enhance urban mobility with optimized infrastructure deployment, despite challenges related to scalability and regulatory integration.
            </h3>
          </div>
          <Image
            src="/images/case/2.svg"
            width={100}
            height={100}
            alt="logo"
            className="case__first-image"
          ></Image>
        </div>
        <div className="case__first">
          <Image
            src="/images/case/3.svg"
            width={100}
            height={100}
            alt="logo"
            className="case__first-image"
          ></Image>
          <div className="case__first-body">
            <h2 className="case__first-body-header">
            Quantum Annealing for Robotics Inspection
            </h2>
            <h3 className="case__first-body-subheader">
            This case study explores the integration of quantum annealing into robotics for inspecting electrical transmission lines. By transforming differential equations governing robot dynamics into Ising model Hamiltonians, we leveraged D-Wave's Advantage quantum annealer. Our results demonstrate enhanced computational efficiency and the viability of quantum annealing in solving complex robotics problems, paving the way for advanced applications in safe and efficient inspections.
            </h3>
          </div>
        </div>
        <div className="case__first">
          <div className="case__first-body">
            <h2 className="case__first-body-header">
            Quantum Annealing for Molecular Docking
            </h2>
            <h3 className="case__first-body-subheader">
            This case study focuses on the molecular unfolding (MU) phase of molecular docking, crucial in drug discovery. We formulated MU as a high-order unconstrained binary optimization problem, aiming to maximize the internal distances between atoms within a molecule. Our approach demonstrated superior performance compared to classical solvers, showcasing the potential of quantum annealing in enhancing the efficiency of molecular docking processes.
            </h3>
          </div>
          <Image
            src="/images/case/4.svg"
            width={100}
            height={100}
            alt="logo"
            className="case__first-image"
          ></Image>
        </div>
      </div>
      <div className="news">
        <h2 className="news__header">News</h2>
        <h3 className="news__description">
          Stay updated with the latest happenings and exciting developments at
          YourBank through our press releases.
        </h3>
        <NewsHolder></NewsHolder>
      </div>
    </>
  );
}
