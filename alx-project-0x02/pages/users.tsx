import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserPageProps } from "@/interfaces";
import React from "react";

const Users: React.FC<UserPageProps> = ({ users }) => {
	return (
		<div>
			<Header />
			{users.map((user) => (
				<UserCard
					key={user.id}
					id={user.id}
					name={user.name}
					email={user.name}
					username={user.username}
				/>
			))}
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch("https://jsonplaceholder.typicode.com/Users");
	const users = res.json();
	return {
		props: {
			users,
		},
	};
}

export default Users;
