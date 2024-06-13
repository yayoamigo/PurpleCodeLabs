import React from "react";

export default function Title({
	text,
	className,
}: {
	text: string;
	className?: string;
}) {
	return (
		<div className={`text-center ${className} cursor-pointer`}>
			<h1 className="text-3xl font-bold group-hover:text-green-400 transition-all z-10">
				{text}
			</h1>
			<div className="w-40 h-1 bg-green-500 rounded-full group-hover:bg-green-400 mx-auto transition-all"></div>
			<div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2 group-hover:bg-indigo-400 mx-auto transition-all"></div>
		</div>
	);
}
