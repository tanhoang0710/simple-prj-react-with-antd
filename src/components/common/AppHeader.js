import { Menu } from "antd";

const items = [
	{ label: "Home", key: "home" },
	{ label: "About", key: "about" },
	{ label: "Features", key: "features" },
	{ label: "How it works", key: "howitworks" },
	{ label: "FAQ", key: "faq" },
	{ label: "Pricing", key: "pricing" },
	{ label: "Contact", key: "contact" },
];

export default function AppHeader() {
	return (
		<div className="container-fluid">
			<div className="header">
				<div className="logo">
					<i className="fas fa-bolt"></i>
					<a href="https://www.google.com/">Tech</a>
				</div>
				<Menu
					mode="horizontal"
					defaultSelectedKeys={["home"]}
					items={items}
				/>
			</div>
		</div>
	);
}
