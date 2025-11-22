import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
	return (
		<nav>
			<h2>My Page</h2>
			<div>
				<Link href="/about">About</Link>
				<Link href="/home">Home</Link>
				<Link href="/posts">Posts</Link>
				<Link href="/users">Users</Link>
			</div>
		</nav>
	);
};

export default Header;
