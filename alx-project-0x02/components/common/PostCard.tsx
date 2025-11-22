import { PostProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostProps> = ({ title, body }) => {
	return (
		<div>
			<h2>Title: {title}</h2>
			<h2>body: {body}</h2>
		</div>
	);
};

export default PostCard;
