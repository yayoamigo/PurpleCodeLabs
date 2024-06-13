"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Title from "./Title";
const people = [
  {
    id: 1,
    name: "David Zambrano",
    designation: "Co-founder/ Technical Lead",
    image:
      "/yo.jpg",
  },
  {
    id: 2,
    name: "Luis Zambrano",
    designation: "Co-founder/Project Manager",
    image:
      "/luis.jpg",
  },
  {
    id: 3,
    name: "Eva Palacios",
    designation: "Produc Owner/Scrum Master",
    image:
      "/eva.jpg",
  },
  {
    id: 4,
    name: "Floris Del Salto",
    designation: "UX Designer",
    image:
      "/floria.jpg",
  },
  {
    id: 5,
    name: "Javier Roca",
    designation: "Senior Developer",
    image:
      "/roca.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="py-10 p-5 sm:p-0 m-40">  
    <Title text="Meet the team"></Title>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </div>
  );
}

export default AnimatedTooltipPreview;
