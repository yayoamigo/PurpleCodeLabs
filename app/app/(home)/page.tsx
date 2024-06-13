import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Staff from "./components/Staff";

export default function Page() {
	return (
		<div className="min-h-screen bg-black overflow-hidden">
			<div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative z-20">
				<div className="max-w-7xl mx-auto p-5 z-30">
					<Navbar />
					<HeroSection />
				</div>
				<div className="h-5 xl:h-25 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full z-10"></div>
			</div>
			<div className="max-w-7xl mx-auto p-5 mt-20 z-20">
				<Staff/>
				<Skills />
				<Projects />
				<Contact />				
				<Footer />
			</div>
		</div>
	);
}
