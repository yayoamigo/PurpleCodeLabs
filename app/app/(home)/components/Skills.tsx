"use client";
import React from "react";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
	SiGit,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiTailwindcss,
	SiDocker,
	SiDotnet,
	SiAwslambda
} from "react-icons/si";
import Title from "./Title";
export default function Skills() {
	const skills = [
		{
			text: "React",
			Icon: SiReact,
		},
		{
			text: "Next.js",
			Icon: SiNextdotjs,
		},
		{
			text: "Tailwind",
			Icon: SiTailwindcss,
		},
		{
			text: "Postgres",
			Icon: SiPostgresql,
		},
		{
			text: "Git",
			Icon: SiGit,
		},
		{
			text: "Node.js",
			Icon: SiNodedotjs,
		},		
		{
			text: "AWS",

			Icon: SiAwslambda,
		},
		{
			text: "Docker",
			Icon: SiDocker,
		},
		{
			text: "Dotnet",
			Icon: SiDotnet,
		},
	];

	return (
		<div className=" max-w-5xl mx-auto px-8">
			<Title
				text="Our Tech Stack"
				className="flex flex-col items-center justify-center"
			/>
			<HoverEffect items={skills} />
		</div>
	);
}
