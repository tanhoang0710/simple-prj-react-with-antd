import React from "react";
import AppAbout from "../components/home/AppAbout";
import AppContact from "../components/home/AppContact";
import AppFaq from "../components/home/AppFaq";
import AppFeature from "../components/home/AppFeature";
import AppHero from "../components/home/AppHero";
import AppPricing from "../components/home/AppPricing";
import AppWorks from "../components/home/AppWorks";

export default function AppHome() {
	return (
		<div className="name">
			<AppHero />
			<AppAbout />
			<AppFeature />
			<AppWorks />
			<AppFaq />
			<AppPricing />
			<AppContact />
		</div>
	);
}
