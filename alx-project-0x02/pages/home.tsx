import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import React, { useState } from "react";

const Home = () => {
	const [cards, setCards] = useState<CardProps[]>([]);
	const [showModal, setShowModal] = useState(false);

	const addCard = (newCard: CardProps) => {
		setCards([...cards, newCard]);
		setShowModal(false);
	};

	const handleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<Header />
			<div className="min-h-screen bg-gray-100 p-6">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">Your Posts</h2>

					<button
						onClick={handleModal}
						className="mb-6 bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition-all">
						Add New Post
					</button>

					<div className="space-y-4">
						{cards.map((card, index) => (
							<Card key={index} title={card.title} content={card.content} />
						))}

						{cards.length === 0 && (
							<p className="text-gray-500">No posts yet — add one!</p>
						)}
					</div>
				</div>

				{showModal && <PostModal handleModal={handleModal} addCard={addCard} />}
			</div>
		</>
	);
};

export default Home;
