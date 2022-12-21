import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Routes, Route } from "react-router-dom";

import Products from "./components/Products/Products";
import NavBar from "./components/Products/Navbar";

const App = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const response = await commerce.products.list();
		setProducts((response && response.data) || []);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	console.log(products);
	return (
		<>
			<div>
				<NavBar />
				<Routes>
					<Route path='/' element={<Products products={products} />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
