import Card from "@/components/common/Card";
import React from "react";

const Home: React.FC = () => {
	return (
		<div>
			<h2>Home Page</h2>
			<Card
				title="News"
				content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique necessitatibus voluptas dolores quas nam error cumque iusto hic dolore accusamus, animi vitae nulla commodi ea vel temporibus eaque iste quos."
			/>
			<Card
				title="Sports"
				content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique necessitatibus voluptas dolores quas nam error cumque iusto hic dolore accusamus, animi vitae nulla commodi ea vel temporibus eaque iste quos."
			/>
			<Card
				title="Education"
				content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique necessitatibus voluptas dolores quas nam error cumque iusto hic dolore accusamus, animi vitae nulla commodi ea vel temporibus eaque iste quos."
			/>
			<Card
				title="Tech"
				content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique necessitatibus voluptas dolores quas nam error cumque iusto hic dolore accusamus, animi vitae nulla commodi ea vel temporibus eaque iste quos."
			/>
		</div>
	);
};

export default Home;
