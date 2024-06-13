import React from "react";
import Navbar from "./Navbar";

export default function Footer() {
	return (
		<div className=" border-t mt-10">
			<Navbar className="flex-col gap-5" />
			<div className="text-center text-sm text-gray-400 mt-5">
				<p>© 2021 Purplecode Labs. All rights reserved.</p>
			
			</div>
		</div>
	);
}
