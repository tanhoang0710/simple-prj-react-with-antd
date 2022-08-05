import React from "react";
import AppAbout from "../components/home/AppAbout";
import AppHero from "../components/home/AppHero";

export default function AppHome() {
	return (
		<div className="name">
			<AppHero />
			<AppAbout />
		</div>
	);
}
