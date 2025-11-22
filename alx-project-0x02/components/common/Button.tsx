import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ size, shape }) => {
	return (
		<button
			className={`bg-blue-700 text-white block m-1 mt-2 mb-2 p-1 ${size} ${shape}`}>
			Click me
		</button>
	);
};

export default Button;
