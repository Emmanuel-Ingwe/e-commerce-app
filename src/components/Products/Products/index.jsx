import Product from "../product";

const Products = ({ products }) => {
	return (
		<div>
			{products.map((product) => {
				return <Product product={product} />;
			})}
		</div>
	);
};

export default Products;
