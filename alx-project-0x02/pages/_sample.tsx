import Modal from "@/components/common/_Modal";
import React, { useState } from "react";

const Sample = () => {
	const [showModal, setShowModal] = useState(false);
	const handleModal = () => {
		setShowModal(!showModal);
	};
	return (
		<>
			<button className="bg-white text-black p-2" onClick={handleModal}>
				Show Modal
			</button>
			<div>{showModal && <Modal handleModal={handleModal} />}</div>
		</>
	);
};

export default Sample;
