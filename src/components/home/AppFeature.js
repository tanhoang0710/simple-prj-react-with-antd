import { Card, Col, Row } from "antd";
import React from "react";
import image1 from "../../assets/images/modern-design.jpg";
import image2 from "../../assets/images/clean-design.jpg";
import image3 from "../../assets/images/great-support.jpg";
import image4 from "../../assets/images/easy-customise.jpg";
import image5 from "../../assets/images/unlimited-features.jpg";
import image6 from "../../assets/images/advanced-option.jpg";

const { Meta } = Card;

const data = [
	{ img: image1, title: "Modern Design" },
	{ img: image2, title: "Clean and Elegant" },
	{ img: image3, title: "Great Support" },
	{ img: image4, title: "Easy to customise" },
	{ img: image5, title: "Unlimited Features" },
	{ img: image6, title: "Advanced Options" },
];

export default function AppFeature() {
	return (
		<div id="feature" className="block featureBlock bgGray">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>Key Features and Benefits</h2>
					<p>
						Obcaecati consequatur libero repudiandae, aperiam itaque
						laborum!
					</p>
				</div>

				<Row gutter={[16, 16]}>
					{data.map((item, index) => (
						<Col
							xs={{ span: 24 }}
							sm={{ span: 12 }}
							md={{ span: 8 }}
							key={index}
						>
							<Card
								hoverable
								cover={<img alt="example" src={item.img} />}
							>
								<Meta title={item.title} />
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
}
