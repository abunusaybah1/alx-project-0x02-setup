import Button from "@/components/common/Button";
import React from "react";

const About: React.FC = () => {
	return (
		<div>
			<h2>About Page</h2>
			<Button size="text-sm" shape="rounded-sm" />
			<Button size="text-md" shape="rounded-md" />
			<Button size="text-lg" shape="rounded-full" />
		</div>
	);
};

export default About;
