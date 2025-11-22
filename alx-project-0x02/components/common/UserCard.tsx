import { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({ name, id, email, username }) => {
	return (
		<div>
			<p>ID: {id}</p>
			<h2>Name: {name}</h2>
			<h3>Username: {username}</h3>
			<h4>Email: {email}</h4>
		</div>
	);
};

export default UserCard;
