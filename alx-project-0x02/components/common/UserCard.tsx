import { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({
	name,
	id,
	email,
	username,
	address,
}) => {
	return (
		<div>
			<p>ID: {id}</p>
			<h2>Name: {name}</h2>
			<h3>Username: {username}</h3>
			<h4>Email: {email}</h4>
			<p>Address: {address.street}</p>
		</div>
	);
};

export default UserCard;
