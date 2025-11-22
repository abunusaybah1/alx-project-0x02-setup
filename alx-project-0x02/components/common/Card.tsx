import { type CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({ title, content }) => {
	return (
		<div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
			<h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
			<p className="text-gray-600 leading-relaxed">{content}</p>
		</div>
	);
};

export default Card;
