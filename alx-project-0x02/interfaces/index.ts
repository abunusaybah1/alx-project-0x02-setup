export interface CardProps {
	title: string;
	content: string;
}

export interface ModalProps {
	handleModal: () => void;
	addCard: (newCard: { title: string; content: string }) => void;
}

export interface ButtonProps {
	size: "small" | "medium" | "large";
	shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
	title: string;
	body: string;
	userId: number;
}

export interface PostPageProps {
	posts: PostProps[];
}

export interface UserProps {
	id: number;
	name: string;
	email: string;
	username: string;
	address: { street: string };
}

export interface UserPageProps {
	users: UserProps[];
}
