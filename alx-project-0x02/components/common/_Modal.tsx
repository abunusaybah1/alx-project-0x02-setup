import React from "react";

interface handleModal {
	handleModal: () => void;
}
const Modal = ({ handleModal }: handleModal) => {
	return (
		<div className="bg-white text-black w-100">
			<h2>Modal box</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor
				dolore numquam. Quasi, iste. Reprehenderit temporibus est alias deleniti
				possimus fugiat eaque labore sit ducimus, inventore modi odit! Harum,
				fuga.
			</p>
			<button className="bg-black text-white p-2" onClick={handleModal}>
				Close
			</button>
		</div>
	);
};

export default Modal;
