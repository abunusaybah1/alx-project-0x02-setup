export interface CardProps {
	title: string;
	body: string;
}

export interface ModalProps {
	handleModal: () => void;
	addCard: (newCard: { title: string; body: string }) => void;
}

export interface ButtonProps {
	size: "small" | "medium" | "large";
	shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
	title: string;
	content: string;
	userId: number;
}

export interface PostPageProps {
	posts: PostProps[];
}
