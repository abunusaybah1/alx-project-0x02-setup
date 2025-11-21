import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import React, { useState } from "react";

const Home: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const handleModal = () => {
		setShowModal(!showModal);
	};
	return (
		<div>
			<h2>Home Page</h2>
			<button className="bg-white text-black p-1" onClick={handleModal}>
				Open Modal
			</button>
			<Card
				title="News"
				content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique necessitatibus voluptas dolores quas nam error cumque iusto hic dolore accusamus, animi vitae nulla commodi ea vel temporibus eaque iste quos."
			/>
			{showModal && <PostModal handleModal={handleModal} />}
		</div>
	);
};

export default Home;
