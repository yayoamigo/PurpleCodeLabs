import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import Image from "next/image";

export default function HeroSection() {
	return (
		<div className="min-h-[70vh] flex flex-col-reverse  gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
			<div className=" space-y-10 text-center lg:text-left">
				<h1 className="text-4xl lg:text-7xl font-bold">
					Lets improve the world together! 
					<br />
					<br />{" "}
					<span className=" underline underline-offset-8 decoration-purple-500">
						{"PurpleCodeLabs"}
					</span>
				</h1>
				<p className="md:w-96 text-lg text-gray-300">
					{
						"We are a passionate software development company committed to leveraging technology for social good. Our heart lies in projects that make a difference."
					}
				</p>
				<Link href="#contact" className="inline-block group">
					<Title text="Contact us" />
				</Link>
			</div>
			<div className=" relative">
				
					<MovingBorderBtn
						borderRadius="0.5rem"
						className=" p-3 font-semibold"
					>
						<Image
							src="/logo.jpg"
							alt="hero"
							width={500}
							height={500}
							objectFit="contain"
							className="rounded-md"
						/>
					</MovingBorderBtn>
				
			</div>
		</div>
	);
}
