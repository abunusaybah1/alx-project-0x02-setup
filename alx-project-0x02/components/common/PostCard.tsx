import { PostProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostProps> = ({ title, content }) => {
	return (
		<div>
			<h2>Title: {title}</h2>
			<h2>Content: {content}</h2>
		</div>
	);
};

export default PostCard;
