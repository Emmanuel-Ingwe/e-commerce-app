import React from "react";

const Products = ({ products }) => {
	return (
		<div>
			{products.map((product) => {
				<h1>{product.name}</h1>;
			})}
		</div>
	);
};

export default Products;
