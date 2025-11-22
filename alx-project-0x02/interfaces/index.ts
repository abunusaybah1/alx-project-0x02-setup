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
