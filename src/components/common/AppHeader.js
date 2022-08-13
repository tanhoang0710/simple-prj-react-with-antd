import React, { useState } from "react";
import { Anchor } from "antd";
import { Button, Drawer } from "antd";
const { Link } = Anchor;

export default function AppHeader() {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<div className="container-fluid">
			<div className="header">
				<div className="logo">
					<i className="fas fa-bolt"></i>
					<a href="https://www.google.com/">Tech</a>
				</div>
				<div className="mobileHidden">
					<Anchor targetOffset="65">
						<Link href="#hero" title="Home" />
						<Link href="#about" title="About" />
						<Link href="#feature" title="Feature" />
						<Link href="#works" title="Works" />
						<Link href="#faq" title="FAQ" />
						<Link href="#pricing" title="Pricing" />
						<Link href="#contact" title="Contact" />
					</Anchor>
				</div>
				<div className="mobileVisible">
					<Button type="primary" onClick={showDrawer}>
						<i className="fas fa-bars"></i>
					</Button>
					<Drawer
						placement="right"
						onClose={onClose}
						visible={visible}
					>
						<Anchor targetOffset="65">
							<Link href="#hero" title="Home" />
							<Link href="#about" title="About" />
							<Link href="#feature" title="Feature" />
							<Link href="#works" title="Works" />
							<Link href="#faq" title="FAQ" />
							<Link href="#pricing" title="Pricing" />
							<Link href="#contact" title="Contact" />
						</Anchor>
					</Drawer>
				</div>
			</div>
		</div>
	);
}
