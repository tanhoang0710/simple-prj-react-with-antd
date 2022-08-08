import React from "react";
import AppAbout from "../components/home/AppAbout";
import AppFeature from "../components/home/AppFeature";
import AppHero from "../components/home/AppHero";
import AppWorks from "../components/home/AppWorks";

export default function AppHome() {
	return (
		<div className="name">
			<AppHero />
			<AppAbout />
			<AppFeature />
			<AppWorks />
		</div>
	);
}
