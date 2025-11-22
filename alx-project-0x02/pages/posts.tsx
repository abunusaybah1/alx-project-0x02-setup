import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostPageProps, PostProps } from "@/interfaces";
import React from "react";

const Posts: React.FC<PostPageProps> = ({ posts }) => {
	return (
		<div>
			<Header />
			<h2>Posts</h2>
			{posts.map((post, key) => (
				<PostCard key={key} userId={post.userId} title={post.title} content={post.body} />
			))}
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await res.json();

	// const posts = data.slice(0, 10).map((post: PostProps) => ({
	// 	title: post.title,
	// 	body: post.body,
	// 	userId: post.userId,
	// }));

	return {
		props: {
			posts,
		},
	};
}
export default Posts;
