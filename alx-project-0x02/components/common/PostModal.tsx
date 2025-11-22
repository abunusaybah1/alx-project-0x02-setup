import { ModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<ModalProps> = ({ handleModal, addCard }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!title || !content) return;

		addCard({ title, content });
		setTitle("");
		setContent("");
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
			<div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 animate-fadeIn">
				<h2 className="text-xl font-semibold mb-4 text-gray-800">
					Add New Post
				</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-indigo-500"
					/>

					<textarea
						placeholder="Content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-indigo-500"
					/>

					<button
						type="submit"
						className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all">
						Add
					</button>
				</form>

				<button
					className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition-all"
					onClick={handleModal}>
					Close Modal
				</button>
			</div>
		</div>
	);
};

export default PostModal;
