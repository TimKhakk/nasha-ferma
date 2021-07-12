import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import Header   from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Products from './Components/Products/Products';
import Cart     from './Components/Cart/Cart';
import Auth     from './Components/Auth/Auth';

import { data } from './data';
import { useState } from "react";


function App() {
	const getCartLocalStorage = () => JSON?.parse(localStorage.getItem('cartLocalStorage')) || [];
	const setCartLocalStorage = cart => localStorage.setItem('cartLocalStorage', JSON.stringify(cart));

	const getSelectedCategoryLocalStorage = () => JSON?.parse(localStorage.getItem('selectedCategoryLocalStorage')) || "Овощи";
	const setSelectedCategoryLocalStorage = category => localStorage.setItem('selectedCategoryLocalStorage', JSON.stringify(category));

	const [ cart, setCart ] = useState(getCartLocalStorage);
	const [ category, setCategory ] = useState(getSelectedCategoryLocalStorage);

	const changeCategory = (category) => {
		return setCategory(() => {
			setSelectedCategoryLocalStorage(category);
			return category
		})
	}

	const сategories = [...new Set(data.map(item => item.category))]; // ["Овощи", "Молчные продукты"]
	const products = сategories.map(category => data.filter(item => item.category === category)); //  [ [], [] ]
	const categoriedProducts = data.filter(item => item.category === category); // [{"Овощи"}, {"Овощи"}]
	const groups = [...new Set(categoriedProducts.map(item => item.group))]; // ["Огурцы", "Томаты"]

	const plusProductToCart = (id) => {
		setCart(prevCart => {
			const foundProduct = prevCart.find(item => item.id === id);
			const updatedProduct = {...foundProduct, count: foundProduct.count + 1};

			const updatedCart = prevCart.map(item => {
				if (item.id === updatedProduct.id) {
					return updatedProduct
				} else {
					return item
				}
			})
			setCartLocalStorage(updatedCart);
			return updatedCart;
		})
	};

	const deleteProduct = (id) => setCart(prevCart => {
		const updatedCart = prevCart.filter(item => item.id !== id);
		setCartLocalStorage(updatedCart);
		return updatedCart;
	})

	const minusProductToCart = (id) => {
		setCart(prevCart => {
			const foundProduct = prevCart.find(item => item.id === id);
			if(foundProduct.count <= 1) {
				deleteProduct(id)
			}
			const updatedProduct = {...foundProduct, count: foundProduct.count - 1};

			const updatedCart = prevCart.map(item => {
				if (item.id === updatedProduct.id) {
					return updatedProduct;
				} else {
					return item
				}
			});

			setCartLocalStorage(updatedCart);
			return updatedCart;
		})
	};

	const addProductToCart = (id) => {
		setCart(prevCart => {
			const newProduct = data.find(item => item.id === id);
			newProduct.count = 1;
			const updatedCart = [...prevCart, newProduct];

			setCartLocalStorage(updatedCart);

			return updatedCart;

		})
	};

	const countTotalPrice = () => cart.reduce((sum, item) => sum + (item.price * item.count), 0); // Считаем всю сумму

	return (
		<div className="app">
			<Router>

				<Header/>
				<Route path="/" exact   component={Homepage}/>

				<Route path="/products">
					<Products
						cart={cart}
						plusProductToCart={plusProductToCart}
						deleteProduct={deleteProduct}
						minusProductToCart={minusProductToCart}
						products={products}
						addProductToCart={addProductToCart}
						countTotalPrice={countTotalPrice}
						categoriedProducts={categoriedProducts}
						groups={groups}
						changeCategory={changeCategory}
					/>
				</Route>

				<Route path="/cart">
					<Cart
						cart={cart}
						plusProductToCart={plusProductToCart}
						deleteProduct={deleteProduct}
						minusProductToCart={minusProductToCart}
						countTotalPrice={countTotalPrice}
					/>
				</Route>

				<Route path="/auth"     component={Auth}/>

			</Router>
		</div>
	);
}

export default App;
