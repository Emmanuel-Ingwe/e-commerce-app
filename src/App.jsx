import { useState } from "react";
import { commerce } from "./lib/commerce";

const App = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const response = await commerce.products.list();
		setProducts((response && response.data) || []);
	};
	return <div className='App'>App Co,</div>;
};

export default App;
