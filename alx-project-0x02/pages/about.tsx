import Button from "@/components/common/Button";
import React from "react";

const About: React.FC = () => {
	return (
		<div>
			<h2>About Page</h2>
			<Button size="small" shape="rounded-sm" />
			<Button size="medium" shape="rounded-md" />
			<Button size="large" shape="rounded-full" />
		</div>
	);
};

export default About;
