import React, { useState } from "react";

interface ModalProps {
	handleModal: () => void;
}
interface handleSubmit {
	handleSubmit: () => void;
}

const PostModal = ({ handleModal }: ModalProps) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setTitle(title);
		setContent(title);
	};
	return (
		<div>
			<form action="">
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea placeholder="Content" value={content} />
				<button
					type="submit"
					onClick={handleSubmit}
					onChange={(e) => setContent(e.target.value)}>
					Add
				</button>
			</form>
			<button className="bg-white text-black p-1" onClick={handleModal}>
				Close Modal
			</button>
		</div>
	);
};

export default PostModal;
